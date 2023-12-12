import { findAllLists } from '@repo/api';
import { List } from '@repo/models';
import { CONTEXT_ACTIONS } from '@utils/constants';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { UpdateListPropsType } from './ListContext.types';

export type ListContextDataProps = {
  lists: List[];
  updateList: (params: UpdateListPropsType) => void;
};

type ListContextProviderProps = {
  children: ReactNode;
};

export const ListContext = createContext<ListContextDataProps>(
  {} as ListContextDataProps
);

export const ListContextProvider = ({ children }: ListContextProviderProps) => {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    console.log('LISTS', lists);
  }, [lists]);

  const updateList = ({ target, action, data }: UpdateListPropsType) => {
    setLists(prev => {
      let updatedList: List[] = prev;

      if (target === 'LIST') {
        switch (action) {
          case CONTEXT_ACTIONS.CREATE:
            updatedList = [...prev, data];
            break;
          case CONTEXT_ACTIONS.UPDATE:
            updatedList = prev.map(list => (list.id === data.id ? data : list));
            break;
          case CONTEXT_ACTIONS.DELETE:
            updatedList = prev.filter(list => list.id !== data.id);
            break;
          default:
            break;
        }
      }

      if (target === 'TASK') {
        switch (action) {
          case CONTEXT_ACTIONS.CREATE:
            console.log('UPDATED LIST BEFORE: ', prev);
            updatedList = prev.map(list =>
              list.id !== data.listId
                ? list
                : {
                    ...list,
                    tasks: [...list?.tasks, data]
                  }
            );
            console.log('UPDATED LIST AFTER', updatedList);
            break;
          case CONTEXT_ACTIONS.UPDATE:
            console.log('UPDATE TASK');
            updatedList = prev.map(list =>
              list.id !== data.listId
                ? list
                : {
                    ...list,
                    tasks: list.tasks.map(task =>
                      task.id !== data.id ? task : data
                    )
                  }
            );
            break;
          case CONTEXT_ACTIONS.DELETE:
            console.log('DELETE TASK');
            updatedList = prev.map(list =>
              list.id !== data.listId
                ? list
                : {
                    ...list,
                    tasks: list.tasks.filter(task => task.id !== data.id)
                  }
            );
            break;
          default:
            break;
        }
      }

      return updatedList;
    });
  };

  useEffect(() => {
    (async function () {
      const { data } = await findAllLists();

      setLists(data);
    })();
  }, []);

  return (
    <ListContext.Provider value={{ lists, updateList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useLists = () => {
  const context = useContext(ListContext);

  return context;
};
