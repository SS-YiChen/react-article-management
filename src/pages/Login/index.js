import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = async (value) => {
    console.log(value)
    // call action function fetchLogin
    await dispatch(fetchLogin(value))
    navigate('/')
    message.success('Login successfully')
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* Login Form */}
        <Form onFinish={onFinish} validateTrigger='onBlur'>
          <Form.Item
            // mobile: 13600000002
            name='mobile' 
            rules={[
              {
                required: true,
                message: 'Enter Your Username'
              },
              {
                pattern:''
              }
            ]}
          >
            <Input size="large" placeholder="Enter Your Username" />
          </Form.Item>

          <Form.Item
            // code: 246810
            name='code'
            rules={[
              {
                required: true,
                message: 'Enter Your Password'
              }
            ]}
          >
            <Input size="large" placeholder="Enter Your Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login