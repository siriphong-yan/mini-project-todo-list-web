import { useAuthMethod } from "@/authHooks";
import HeaderPage from "@/components/HeaderPage";
import { TEXT_COLOR, dateFormated } from "@/constasts/appConstats";
import { getTaskListAction } from "@/redux/action/taskAction";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const IndexPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const taskTodayList:Array<any> = useSelector((state: RootState) => state.tasks.taskTodayList);

    useEffect(()=>{
      getTaskList();
    }, []);

    const getTaskList = () => {
      dispatch(getTaskListAction());
    }
    
    return (
      <>
        <HeaderPage title="TASK วันนี้" subTitle="20 พ.ค. 2567" />
        <div className="contentPage">
          <Row>
            <Col xs={6}>
              <div className="wrap-content-list">
                <div className="content-list list-direction-row">
                  {
                    taskTodayList.length ? taskTodayList.map((data, index) => (
                      <div 
                        key={index} 
                        className="task-item"
                        style={{
                          backgroundColor:data?.taskBgColor ?? "#fff",
                          width:`calc(100% - 25px)`,
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
                    )) : null
                  }
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="resulte-item">

              </div>
            </Col>
          </Row>
        </div>
      </>
    )
}

export default IndexPage;