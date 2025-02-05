const { Router } = require("express")
const authcontroller=require('../controllers/authcontrollers');
const {  jwtAuthMiddleware  }=require('../middlewares/JwtAuthMiddleware')

const router=Router();

router.get('/',authcontroller.home_get);
router.get('/recipes',jwtAuthMiddleware,authcontroller.recipe_get);





 router.get('/login',authcontroller.login_get);



 router.get('/signup',authcontroller.signup_get);


 router.post('/login',authcontroller.login_post);


 router.post('/signup',authcontroller.signup_post);
 router.get('/logout',authcontroller.logout_get);









  module.exports = router;







