function LogoutSwitch({logout})
{
  return (
    <div>
      <button className='logoutBtn' onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutSwitch