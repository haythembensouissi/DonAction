import React, { useEffect, useState } from 'react';
import Navbar from '../src/app/components/Navbar';
import { useCookies } from "react-cookie";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import * as antd from 'antd';

const Profile = () => {
  const [loadingDonations, setLoadingDonations] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [cookies] = useCookies(null);
  const [donation, setDonations] = useState([]);
  const [blog, setBlogs] = useState([]);
  const [page, setPage] = useState("profile");
  const username = cookies.username;
  const email = cookies.email;
  const image=cookies.image
const {Meta}=antd.Card
  useEffect(() => {
    getDonations();
    getBlogs();
  }, []);

  const getDonations = async () => {
    setLoadingDonations(true); // Set loading to true while fetching data
    try {
      const res = await fetch('http://localhost:5000/api/getdonations');
      const donations = await res.json();
      setDonations(donations);
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoadingDonations(false); // Set loading to false after fetching data
    }
  };

  const getBlogs = async () => {
    setLoadingBlogs(true); // Set loading to true while fetching data
    try {
      const res = await fetch("http://localhost:5000/api/blog/get");
      const blogs = await res.json();
      setBlogs(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoadingBlogs(false); // Set loading to false after fetching data
    }
  };

  const DeleteDonation = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/deletedonation/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        getDonations();
      } else {
        console.error('Error deleting donation:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/blog/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        getBlogs();
      } else {
        console.error('Error deleting blog:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const filteredDonations = donation.filter(donation => donation.holdername === username);
  const filteredBlogs = blog.filter(blog => blog.useremail === email);

  return (
    <div>
      <Navbar />
      {page === "profile" ? (
        <div>
          <h1 className='text-center'>Profile</h1>
          <antd.Button onClick={() => setPage("blogs")}>View Blogs</antd.Button>
          <antd.Button onClick={() => setPage("donations")}>View Donations</antd.Button>
        </div>
      ) : page === "donations" ? (
        <div>
          <antd.Button onClick={() => setPage("profile")}><ArrowBackIcon /></antd.Button>
          {filteredDonations.map((donation, key) => (
            <div key={key}>
            
              <antd.Card
                style={{ width: 300, marginTop: 16 }}
                loading={loadingDonations}
              >
              <Meta
              avatar={<antd.Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
              title={donation.holdername}
              
              description={donation.amount}
              />
             
              </antd.Card>
                <antd.Skeleton loading={loadingDonations} avatar active>
                <antd.Button onClick={()=>DeleteDonation(donation._id)} danger type="primary">Cancel donation</antd.Button>
                </antd.Skeleton>
            
            </div>
          ))}
        </div>
      ) : page === "blogs" ? (
        <div>
          <antd.Button onClick={() => setPage("profile")}><ArrowBackIcon/></antd.Button>
          {filteredBlogs.map((blog, key) => (
            <div key={key}>
            
              <antd.Card
                style={{ width: 300, marginTop: 16 }}
                loading={loadingBlogs}
              >
              <Meta
              avatar={<antd.Avatar src={image} />}
              title={blog.title}
              description={blog.content}
              />
             
              </antd.Card>
                <antd.Skeleton loading={loadingBlogs} avatar active>
                <antd.Button onClick={()=>deleteBlog(blog._id)} danger type="primary">delete</antd.Button>
                </antd.Skeleton>
            
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
