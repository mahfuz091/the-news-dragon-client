import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant='outline-primary'>
        {" "}
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button variant='outline-secondary'>
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div>
        <h4 className='mt-4'>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className='position-relative'>
        <img src={bg} alt='' />
        <div className='position-absolute text text-white'>
          <h5>Create an Amazing Newspaper</h5>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant='danger'>Latest</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
