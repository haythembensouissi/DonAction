import React, { useEffect, useState } from 'react';
import Navbar from '../src/app/components/Navbar';
import { useCookies } from "react-cookie";
import ProfilSet from '../src/app/components/ProfilSet';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
const Profile = () => {
  const [loadingDonations, setLoadingDonations] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  const [cookies] = useCookies(null);
  const [donation, setDonations] = useState([]);
  const [blog, setBlogs] = useState([]);
  const [page, setPage] = useState("profile");
  const username = cookies.username;
  const email = cookies.email;
  const image =cookies.image

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
     
{page=="profile"?(
  <div>
  <h1 className='text-center'>Profile</h1>
  <ProfilSet/>
  <button onClick={()=>setpage("blogs")}>view blogs</button>
  <button onClick={()=>setpage("donations")}>view donations</button>
  </div>)
  :page=="donations"?(<div>
    <button onClick={()=>setpage("profile")}>back</button>
    {filereddonations.map((donation, key) => (
      <div key={key}>
        <h2>{donation.amount}</h2>
        <h3>{donation.holdername}</h3>
        <button onClick={() => DeleteDonation(donation._id)}>Cancel Donation</button>
      </div>

    ))}
    </div>
  ):page=="blogs"?(
    <div>
    <button onClick={()=>setpage("profile")}>back</button>

    {filteredblogs.map((blog, key) => (
      <div key={key}>
        <h2>{blog.title}</h2>
        <h3>{blog.content}</h3>
        <button onClick={() => deleteBlog(blog._id)}>delete blog</button>
      </div>

    ))}
    </div>
    
  ):null
}
     
    

      {page === "profile" ? (
        <div>
          <h1 className='text-center'>Profile</h1>
          <button onClick={() => setPage("blogs")}>View Blogs</button>
          <button onClick={() => setPage("donations")}>View Donations</button>
        </div>
      ) : page === "donations" ? (
        <div>
          <button onClick={() => setPage("profile")}><ArrowBackIcon /></button>
          {filteredDonations.map((donation, key) => (
            <div key={key}>
            <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
       
            </div>
          ))}
        </div>
      ) : page === "blogs" ? (
        <div>
          <button onClick={() => setPage("profile")}><ArrowBackIcon/></button>
          {filteredBlogs.map((blog, key) => (
            <div key={key}>
            
            
            
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
