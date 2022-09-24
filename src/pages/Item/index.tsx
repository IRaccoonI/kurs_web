import React from "react";
import NoPhoto from "../../components/NoPhoto";
import "./style.css";

const Item = () => {
  return (
    <div className="container">
      <div className="mt-2">
        <div className="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          necessitatibus.
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-0 col-lg-2"></div>
        <div className="col-12 col-lg-8">
          <NoPhoto className="ratio-16-9" />
        </div>
        <div className="w-100 mt-2"></div>
        <div className="col-0 col-lg-2"></div>
        <div className="col-6 col-md-3 col-lg-2">
          <NoPhoto className="ratio-16-9 " />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <NoPhoto className="ratio-16-9 " />
        </div>
        <div className="d-md-none w-100 mt-2"></div>
        <div className="col-6 col-md-3 col-lg-2">
          <NoPhoto className="ratio-16-9 " />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <NoPhoto className="ratio-16-9 " />
        </div>
      </div>
      <div className="mt-3">
        <div className="h3">Description:</div>
        <div>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quae doloribus, aliquam similique saepe voluptatum, distinctio magnam
          necessitatibus neque ullam velit maiores. Blanditiis doloremque
          distinctio quasi dolore hic similique doloribus veritatis mollitia vel
          reprehenderit. Perspiciatis sapiente magni sit explicabo, illum iste
          fugiat vitae asperiores eos, voluptatem doloribus voluptas modi ullam
          rem at ratione atque provident nesciunt doloremque sunt rerum pariatur
          reiciendis. Ipsa corporis facere optio vitae magni doloribus
          inventore, omnis porro distinctio, assumenda pariatur dolorum facilis?
          Sint aspernatur vel, incidunt harum quia laboriosam animi magnam
          aliquid, nostrum eius ullam nemo ducimus? Excepturi sapiente iure
          eligendi. Voluptatum odio tempora eum non.
        </div>
      </div>
    </div>
  );
};

export default React.memo(Item);
