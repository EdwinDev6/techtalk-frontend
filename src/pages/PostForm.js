import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export function PostForm() {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is Required"),
          description: Yup.string().required("Description is Required"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              placeholder="Title"
              className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
            />
            <ErrorMessage
              compone="p"
              name="title"
              className="text-red-400 text-sm"
            />

            <Field
              name='description'
              placeholder="Description"
              className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
            />
            <ErrorMessage
              component="p"
              name='description'
              className='text-red-400 text-sm'
            />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
