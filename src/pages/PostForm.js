import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
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
    <div className="flex items-center justify-center ">
      <div className="bg-blue-950 p-10 shadow-md shadow-black mt-7 animate-fade-down animate-once animate-duration-500 animate-ease-linear">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link
            to="/admin"
            className="text-gray-400 text-sm hover:text-white underline"
          >
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
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false);
            navigate("/admin");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
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
                className="text-sm block font-bold text-gray-400 "
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="Description"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full "
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
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white  w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />

              <button
                type="submit"
                className="bg-yellow-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400 animate-pulse float-right"
                disable={isSubmitting}
              >
                {isSubmitting ? (
                  <button
                    type="button"
                    className="bg-yellow-600 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
                    disabled
                  >
                    <div className="flex items-center justify-center m-[10px]">
                      <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                      <div className="ml-2">Processing...</div>
                    </div>
                  </button>
                ) : (
                  "Save"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
