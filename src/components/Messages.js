import React from "react";
import Message from "./Message";

export default function Messages() {
  return (
    <div className="messages">
      <Message
        class="owner"
        time="23:29"
        text="Check out this dog"
        image='https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZyUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="sent image'
      />
      <Message time="23:29" text="he is so cute" />
      <Message
        class="owner"
        time="23:30"
        text="We are going to get one like him"
      />
      <Message time="23:30" text="Wow, that is great" />
      <Message class="owner" time="23:31" text="okay, see ya tomorrow" />
      <Message time="23:32" text="Okay, see ya" />
    </div>
  );
}
