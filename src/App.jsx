import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().required("Email is required*"),
    password: yup.string().required("Password is required*"),

  })
  .required()

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className='w-50 m-auto '>
    <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-3 mt-5">
            <input  {...register("email")} type="email" className={errors.email ? "form-control is-invalid" : "form-control"  } id="exampleInputEmail1" placeholder="Enter your email" aria-describedby="emailHelp" />
          </div>
          <p className="text-danger">{errors.email?.message}</p>
          <div className="mb-3">
            <input {...register("password")} type="password" className={errors.email ? "form-control is-invalid" : "form-control"  } id="exampleInputPassword1" placeholder="Enter your Password"  />
          </div>
          <p className="text-danger">{errors.password ?.message}</p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">Button</button>
          </div>
      </form>
    </div>
    </>
  )
}

export default App