import "./style.scss";
import {memo} from 'react';
import ToDoItem from "./ToDoItem";
import Button from "../../../../Shared/Button";
import IconButton from "./IconButton";
import InputView from "../../../../Shared/InputView";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List } from "react-window";

export const Tasks = memo ( function Tasks ( {
  todos,
  down,
  clear,
  up,
  edit,
  onChangeCheckBox,
  cancelEdit,
  saveTask,
  editTaskRef,
  // fetchToDo,
  // hasMore,
  hasNextPage,
  isNextPageLoading,
  loadNextPage,
}) {
  const itemCount = hasNextPage ? todos.length + 1 : todos.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index) => !hasNextPage || index < todos.length;

  const tasklist = ({ index }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      content = todos?.map((task, index) => {
        // const tasklist = todos?.map((task, index) => {
        return (
          <div
            className={task.isActive ? "list" : "inActiveTask"} //Class Selection
            key={task.id}
          >
            {task.isEditing ? (
              <>
                <InputView refer={editTaskRef} value={task.item} />
                {/* value is default value */}
                <Button name={"Save"} onClick={() => saveTask(task.id)} />
                <Button name={"Cancel"} onClick={() => cancelEdit(task.id)} />
              </>
            ) : (
              <ToDoItem
                value={task.item}
                onChange={() => onChangeCheckBox(task.id)}
                checked={task.isActive ? false : true} // checked task is inactive task
              />
            )}

            <IconButton
              className="buttons"
              onClick={() => clear(task.id)}
              title={"Delete Task"}
              icon={<AiFillDelete className="icons" />}
            />

            <IconButton
              disabled={index === todos.length - 1 ? true : false}
              className="buttons"
              onClick={() => down(task.id)}
              title={"Move Task Down"}
              icon={<FaChevronDown className="icons" />}
            />

            <IconButton
              disabled={index === 0 ? true : false}
              className="buttons"
              onClick={() => up(task.id)}
              title={"Move Task Up"}
              icon={<FaChevronUp className="icons" />}
            />

            <IconButton
              className="buttons"
              disabled={task.isEditing ? true : false}
              onClick={() => edit(task.id)}
              title={"Edit Task"}
              icon={<MdModeEditOutline className="icons" />}
            />
          </div>
        );
      });
      return <div>{content}</div>;
    }
  };

  return (
    <>
      {/* {tasklist} */}

      {/* <div>
        <InfiniteScroll
          dataLength={todos.length}
          next={fetchToDo}
          // inverse={true}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={"List Ends Here"}
        >
          {tasklist}
        </InfiniteScroll>
      </div> */}

      <div>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List"
              height={600}
              itemCount={itemCount}
              itemSize={30}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={1300}
              threshhold = {2}
            >
              {tasklist}
            </List>
          )}
        </InfiniteLoader>
      </div>
    </>
  );
})
