import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../../commonComp/footer/Footer";
import Navigation from "../../commonComp/navigation/Navigation";
const AddPost = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://127.0.0.1:3005/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    navigate("/");
    // .then((json) => console.log(json));
  };

  return (
    <>
      <Navigation></Navigation>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>title</label>
            <input
              {...register("title", { required: true })}
              type={"text"}
              placeholder="add title"
            />
          </div>
          <div>
            <label>body</label>
            <input
              {...register("body", { required: true })}
              type={"text"}
              placeholder="add body"
            />
          </div>

          <button type="submit">add user</button>
        </form>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <Footer />
    </>
  );
};

export default AddPost;
