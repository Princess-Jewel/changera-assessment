import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileAction } from "../../../redux/slices/reposSlice";

const EmptyState = () => {
     
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Princess-Jewel");
  const repos = useSelector(state => state?.repos);
  const {profile} = repos;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [user, dispatch]);
  return (
    <div><p>{profile?.login} &nbsp;doesn’t have any repositories that match.</p></div>
  )
}

export default EmptyState