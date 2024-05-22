import { createTaskAction } from "@/redux/action/taskAction";
import { AppDispatch } from "@/redux/store";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Form, FormSelect, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

type ModalAddTaskProps = {
    show: boolean,
    onHide: () => void
};

const ModalAddTask:React.FC<ModalAddTaskProps> = ({ show, onHide }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState<Date | null>(new Date());
    const [taskDesc, setTaskDesc] = useState("");
    const [taskBgColor, setTaskBgColor] = useState("#CDFFF6");
    const dispatch: AppDispatch = useDispatch();

    const onSubmit = () => {
        const newTaskDate = dayjs(taskDate).format('YYYY-MM-DD');
        dispatch(createTaskAction(
            taskName,
            newTaskDate,
            taskDesc,
            taskBgColor
        ));
        onHide();
        clearForm();
    }

    const clearForm = () => {
        setTaskName("");
        setTaskDate(new Date());
        setTaskDesc("");
        setTaskBgColor("#CDFFF6");
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            เพิ่ม TASK
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="taskName">
                    <Form.Label>ชื่อ TASK</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="กรุณากรอกชื่อ TASK"
                        defaultValue={taskName}
                        onChange={(e)=>{
                            setTaskName(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="taskDesc">
                    <Form.Label>รายละเอียด TASK</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        defaultValue={taskDesc}
                        onChange={(e)=>{
                            setTaskDesc(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="taskDate">
                    <Form.Label>วันที่</Form.Label>
                    <br />
                    <DatePicker 
                        selected={taskDate} 
                        inline
                        onChange={(date) => {
                            setTaskDate(date)
                        }} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="taskBgColor">
                    <Form.Label>สีพื้นหลัง</Form.Label>
                    <FormSelect
                        defaultValue={taskBgColor}
                        onChange={(e:any) => {
                            setTaskBgColor(e.target.value);
                        }}
                    >
                        <option value="#CDFFF6">ฟ้า</option>
                        <option value="#D4CDFF">ม่วง</option>
                        <option value="#FFCDCD">แดง</option>
                        <option value="#EAFFBD">เขียน</option>
                        <option value="#FBFFCD">เหลือง</option>
                        <option value="#E2E2E2">เทา</option>
                    </FormSelect>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button disabled={taskName == "" || taskDate == null || taskDesc == "" || taskBgColor == ""} onClick={onSubmit}>ตกลง</Button>
            <Button onClick={()=>{
                clearForm();
                onHide();
            }} variant="dark">ยกเลิก</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ModalAddTask;