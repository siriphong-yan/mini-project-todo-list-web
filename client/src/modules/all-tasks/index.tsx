import HeaderPage from "@/components/HeaderPage";
import { getTaskAllAction } from "@/redux/action/taskAction";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import { TEXT_COLOR, dateFormated } from "@/constasts/appConstats";
import ModalAddTask from "@/components/ModalAddTask";

const AllTasksPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const taskAllList:Array<any> = useSelector((state: RootState) => state.tasks.taskAllList);
    const createTaskStatus = useSelector((state: RootState) => state.tasks.option?.createTaskStatus);
    const [modalAddShow, setModalAddShow] = useState(false);
    
    useEffect(()=>{
        getTaskList();
    }, []);

    useEffect(() => {
        if(createTaskStatus == "Success"){
            getTaskList();
        }
    }, [createTaskStatus]);
  
    const getTaskList = () => {
        dispatch(getTaskAllAction());
    }

    const addNewTask = () => {
        setModalAddShow(true);
    }

    return(
        <>
        <HeaderPage title="TASK ทั้งหมด" />
        <div className="contentPage">
         <Button variant="primary" onClick={addNewTask} style={{marginBottom:20}}>สร้าง TASK</Button>
          <Row>
            <Col>
              <div className="wrap-content-list">
                <div className="content-list list-direction-row">
                    {
                    taskAllList.length && taskAllList.map((data, index) => (
                        <div 
                        key={index} 
                        className="task-item"
                        style={{
                            backgroundColor:data?.taskBgColor ?? "#fff",
                            width:`calc(33.33% - 25px)`,
                            minHeight:240,
                            padding:20,
                            marginBottom:25,
                            marginLeft:12.5,
                            marginRight:12.5,
                            color:TEXT_COLOR,
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"space-between",
                            alignItems:"flex-start"
                        }}
                        >
                            <div>
                                <h5>{data?.taskName }</h5>
                                {
                                    data?.taskDesc && (
                                    <p style={{fontSize:14}}>{ data?.taskDesc }</p>
                                    )
                                }
                            </div>
                            <div>
                                <p style={{fontSize:12}}>{ dateFormated(data?.taskDate) }</p>
                            </div>
                        </div>
                    ))
                    }
                    <div 
                        className="task-item"
                        style={{
                        backgroundColor:"#cee1ef",
                        width:`calc(33.33% - 25px)`,
                        minHeight:240,
                        padding:20,
                        marginBottom:25,
                        marginLeft:12.5,
                        marginRight:12.5,
                        cursor:"pointer",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                        }}
                        onClick={addNewTask}

                    >
                        <MdAdd size={55} />
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ModalAddTask
            show={modalAddShow}
            onHide={() => setModalAddShow(false)}
        />
        </>
    )
}

export default AllTasksPage;