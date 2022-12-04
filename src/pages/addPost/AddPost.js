import React from "react";

import { useForm } from "react-hook-form";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://127.0.0.1:3005/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        subject: data.subject,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
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
        <div>
          <label>Subject</label>
          <input
            {...register("subject", { required: true })}
            type={"text"}
            placeholder="add subject"
          />
        </div>
        <button type="submit">add user</button>
      </form>
      {errors.exampleRequired && <span>This field is required</span>}
    </div>
  );
};

export default AddPost;
