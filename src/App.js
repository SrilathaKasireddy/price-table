
import "./App.css";

 function App() {

  const pricingtable = [
    {
      name: "FREE",
      amount: "$0/month",
      users: " ✔️Single Users",
      data: "✔️5GB Storage",
      publicproject: " ✔️Unlimited Public Projects",
      access: "✔️Community Access",
      privateproject: "❌Unlimited Private Projects",
      phone: " ❌Dedicated Phone Support",
      subdomain: " ❌Free Subdomains",
      report: "❌Monthly Status Reports",
      submit: "Button"
    },
    {
      name: "PLUS",
      amount: "$9/month",
      users: "✔️5 Users",
      data: "✔️50GB Storage",
      publicproject: " ✔️Unlimited Public Projects",
      access: "✔️Community Access",
      privateproject: "✔️Unlimited Private Projects",
      phone: "✔️Dedicated Phone Support",
      subdomain: "✔️ Free Subdomains",
      report: "❌Monthly Status Reports",
      submit: "Button"
    },
    {
      name: "PRO",
      amount: "$49/month",
      users: "✔️Unlimited Users",
      data: "✔️150GB Storage",
      publicproject: "✔️Unlimited Public Projects",
      access: "✔️Community Access",
      privateproject: "✔️Unlimited Private Projects",
      phone: "✔️Dedicated Phone Support",
      subdomain: "✔️Unlimited Free ",
      report: "✔️Monthly Status Reports",
      submit: "Button"
    }
  ];
  
  
  return (
    
    <div className="App">
      
<h1 className="container-sm">
  <span className="home">Home</span>
  <span  className="info">Info</span>
  <input placeholder="Search" className="search"></input>
</h1>
       {pricingtable.map((nm) => (
        <Table name={nm.name} amount={nm.amount} users={nm.users} data={nm.data} 
        publicproject={nm.publicproject} access={nm.access} privateproject={nm.privateproject} 
        phone={nm.phone} subdomain={nm.subdomain} report={nm.report} submit={nm.submit}   />
        
        

      ))}

    </div>
    
  );
}



export default App;
function Table ({ name,amount,users,data,publicproject,access ,privateproject,phone,subdomain,report,submit}) {
  return (
    
    <div>

    <div className="container">
<div className="row">
      <div className="card" >
      <p className="subhead">{name}</p>
        <p className="amount">{amount}</p>
        <hr></hr>
        <p><b>{users}</b></p>
        <p>{data}</p>
        <p>{publicproject}</p>
        <p>{access}</p>
        <p>{privateproject}</p>
        <p>{phone}</p>
        <p>{subdomain}</p>
        <p>{report}</p>
        <button>{submit}</button>
        
  </div>
  </div>
</div>

</div>

  );
 
}

  