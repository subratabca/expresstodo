const express =require('express');
const StudentController=require("../controllers/StudentController")
const SchoolController=require("../controllers/SchoolController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();


router.post("/CreateStudent",StudentController.CreateStudent)
router.post("/StudentLogin",StudentController.StudentLogin)



router.get("/SelectStudent",AuthVerifyMiddleware,StudentController.SelectStudent);
router.post("/UpdateStudent",AuthVerifyMiddleware,StudentController.UpdateStudent);


router.post("/CreateSchool",AuthVerifyMiddleware,SchoolController.CreateSchool);
router.get("/SelectSchool",AuthVerifyMiddleware,SchoolController.SelectSchool);
router.post("/UpdateSchool",AuthVerifyMiddleware,SchoolController.UpdateSchool);

router.post("/UpdateStatus",AuthVerifyMiddleware,SchoolController.UpdateStatus);
router.post("/RemoveSchool",AuthVerifyMiddleware,SchoolController.RemoveSchool);
router.post("/SelectSchoolByStatus",AuthVerifyMiddleware,SchoolController.SelectSchoolByStatus);
router.post("/SelectSchoolByDate",AuthVerifyMiddleware,SchoolController.SelectSchoolByDate);


module.exports=router;