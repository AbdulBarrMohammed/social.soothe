import { useState, useEffect } from 'react'
import { getJournal, getJournals, createJournal, updateJournal, deleteJournal } from './controller'
import React from 'react'

import {HashRouter as Router, Routes, Route} from "react-router-dom";
import  { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Article } from "../pages/Article"
import { Dashboard } from "../pages/Dashboard"
import { Journals } from "../pages/Journals"
import { CreateJournal } from "../pages/CreateJournal"
import { Landing } from '../pages/Landing';
import { Breathe } from '../pages/Breathe';
import { SelectedJournal } from '../pages/SelectedJournal';
import { Challenge } from '../pages/Challenge';
import { Faq } from '../pages/Faq';
import { Advice } from '../pages/Advice';
import { LogIn } from '../pages/LogIn';
import { SignUp } from '../pages/SignUp';

import { Sidebar } from "../components/Sidebar"
import { LayoutLoggedIn } from '../components/LayoutLoggedIn';
import {Layout} from "../components/Layout"


function App() {

  //Pages

  //Landing page
  //Dashboard page
  //Journal page (read journal page)
  //Journals page
  //Create Journal page
  //About
  //Challenge
  //Article
  //Breating exercise page
  //Contact

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/advice" element={<Advice/>}/>

          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/logIn" element={<LogIn/>}/>

          <Route element={<LayoutLoggedIn/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/journals" element={<Journals/>}/>
            <Route path="/createJournal" element={<CreateJournal/>}/>
            <Route path="/article" element={<Article/>}/>
            <Route path="/breathe" element={<Breathe/>}/>
            <Route path="/selectedJournal/:id" element={<SelectedJournal/>}/>
            <Route path="/challenge" element={<Challenge/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>

    </>
  )

}

export default App
