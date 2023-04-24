import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link} from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          title: post.title,
          description: post.description,
        });
      }
    })();
  }, [params.id, getPost]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>

      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is Required"),
          description: Yup.string().required("Description is Required"),
        })}
        onSubmit={async (values, actions) => {

          if(params.id){
              await updatePost(params.id, values)
          }else{
            await createPost(values);
          }
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
           
            
            <label
              htmlFor="title"
              className="text-sm block font-bold text-gray-400"
            >
              Title
            </label>
            <Field
              name="title"
              placeholder="Title"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="p"
              name="title"
              className="text-red-400 text-sm"
            />
            <label
              htmlFor="description"
              className="text-sm block font-bold text-gray-400"
            >
              Description
            </label>
            <Field
              component="textarea"
              name="description"
              placeholder="Description"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              rows={5}
            />
            <ErrorMessage
              component="p"
              name="description"
              className="text-red-400 text-sm"
            />
            <label
              htmlFor="title"
              className="text-sm block font-bold text-gray-400"
            >
              Imagen
            </label>
            <input type="file" name="image" className=""/>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
}
