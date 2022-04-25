import './Dashboard.css';
import React, { useEffect, useState } from 'react';
// import Scrapper from './Scrapper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Dashboard() {
  const [toDo, setTodo] = useState([
    {
      judul: "Textinput harus besar"
    },
    {
      judul: "siswa bisa menambah data"
    }
  ])
  const [inProgress, setProgress] = useState([
    {
      judul: "save ke database"
    },
  ])
  const [completed, setCompleted] = useState([
    {
      judul: "save data siswa"
    },
  ])

  const [judulTodo, setJudulTodo] = useState("")
  const [judulInProgress, setJudulInProgress] = useState("")
  const [judulComplete, setJudulComplete] = useState("")

  const [showModalTodo, setShowModalTodo] = useState(false)
  const [showModalInProgress, setShowModalInProgress] = useState(false)
  const [showModalComplete, setShowModalComplete] = useState(false)


  const handleSave = () => {
    var data = [
      ...toDo,
      {
        judul: judulTodo
      }
    ]
    setTodo(data);
    setShowModalTodo(false)
  }

  const handleSaveInProgress = () => {
    var data = [
      ...inProgress,
      {
        judul: judulInProgress
      }
    ]
    setProgress(data);
    setShowModalInProgress(false)
  }

  const handleSaveComplete = () => {
    var data = [
      ...completed,
      {
        judul: judulComplete
      }
    ]

    setCompleted(data);
    setShowModalComplete(false)
  }

  return (
    <>
      <div className="App">
        <div className="Navbar">
          <div className="Navbar-logo">
            <p><strong>.to do list</strong></p>
          </div>
          <div className="Navbar-menu" >
            <ul className="menu w-56 p-2 rounded-box mx-10" >
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Projects
                </a>
              </li>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Chat
                </a>
              </li>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Header">
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <div className="form-control mt-10 mr-44" >
                <input type="text" placeholder="Search" className="input input-bordered w-96"></input>
              </div>
              <p className="text-base mt-10 ml-48">Farah Nahwa</p>
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar mt-10 ml-2">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="Container">
          <p className="text-xl font-bold">Projects</p>
        </div>

        <div className="Contents mt-7 float-left mr-10 ml-80">
          <div className="card w-60 h-auto bg-base-100 shadow-xl bg-slate-100">
            <p className="card-title p-4 text-base">To do</p>
            <div className="card actions"></div>
            <button onClick={() => setShowModalTodo(true)} className="btn btn-xs mx-auto px-24 bg-neutral-400">+</button>
            <div className="card-body">
              {
                toDo.map((item, index) => {
                  return (
                    <div className="card card-compact mx-auto w-48 h-24 mr-4 mb-4 bg-base-100">
                      <p className="text-xs text-left p-2">{item.judul}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        {
          showModalTodo ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Title
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalTodo(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <input onChange={((text) => setJudulTodo(text.target.value))} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalTodo(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleSave()}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (null)
        }
        <div className="Contents mt-7 float-left mr-10">
          <div className="card w-60 bg-base-100 shadow-xl bg-slate-100">
            <p className="card-title p-4 text-base">In Progress</p>
            <div className="card actions"></div>
            <button onClick={() => setShowModalInProgress(true)} className="btn btn-xs mx-auto px-24 bg-neutral-400">+</button>
            <div className="card-body">
              {
                inProgress.map((item, index) => {
                  return (
                    <div className="card card-compact mx-auto w-48 h-24 mr-4 mb-4 bg-base-100">
                      <p className="text-xs text-left p-2">{item.judul}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        {
          showModalInProgress ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Title
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalInProgress(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <input onChange={((text) => setJudulInProgress(text.target.value))} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalInProgress(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleSaveInProgress()}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (null)
        }

        <div className="Contents mt-7 float-left mr-10">
          
          <div className="card w-60 bg-base-100 shadow-xl bg-slate-100">
            <p className="card-title p-4 text-base">Completed</p>

            <div className="card actions"></div>
            <button onClick={() => setShowModalComplete(true)} className="btn btn-xs mx-auto px-24 bg-neutral-400">+</button>
            <div className="card-body">
              {
                completed.map((item, index) => {
                  return (
                    <div className="card card-compact mx-auto w-48 h-24 mr-4 mb-4 bg-base-100">
                      <p className="text-xs text-left p-2">{item.judul}</p>
                    </div>
                  )
                })
              }

              
            </div>
          </div>
        </div>

        {
          showModalComplete ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Title
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalComplete(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <input onChange={((text) => setJudulComplete(text.target.value))} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalComplete(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleSaveComplete()}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (null)
        }

      </div>

    </>
  );
}

export default Dashboard;