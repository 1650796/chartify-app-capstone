import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { withIronSessionSsr } from "iron-session/next";
import sessionOptions from "../config/session";
import Header from "../components/header";


export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    const props = {};
    if (user) {
      props.user = req.session.user;
      props.isLoggedIn = true;
    } else {
      props.isLoggedIn = false;
    }
    return { props };
  },
  sessionOptions
);


export default function CreateChart(props) {
  const router = useRouter();

  const [input, setInput] = useState({
    chartName: "",
    categoryTitle: "",
    amountTitle: "",
    categoryone: "",
    amountone: "",
    categorytwo: "",
    amounttwo: "",
    categorythree: "",
    amountthree: "",
    categoryfour: "",
    amountfour: "",
    categoryfive: "",
    amountfive: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.persist();
    setInput({...input, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!chartName) return setError("Must include a chart name");
    if (!categoryTitle) return setError("Must include category title");
    if (!amountTitle) return setError("Must include amount title");
    if (!categoryone) return setError("Must include at least one category");
    if (!amountone) return setError("Must include one category amount");

        try {
          const res = await fetch('/api/chart', {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({...input}),
          });
          if (res.status === 200) return router.push("/dashboard");
          console.log({...input})
          const { error: message } = await res.json();
          setError(message);
        } catch (error) {
          console.log(error);
        }
      }
   

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Chart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/chartifylogo.png" />
      </Head>

      <Header isLoggedIn={props.isLoggedIn} name={props?.user?.name} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create a New Chart 
        </h1>


        <p className={styles.description}>
          Enter the values below to generate a pie chart:
        </p>

        <form className={styles.form}
         onSubmit={handleSubmit}
        >

        <label htmlFor="chartName">Chart Name: </label>
        <input 
         type="text" 
         name="chartName"
         id="chartName" 
         placeholder="e.g. My Pie Chart"
         value={input.chartName}
         onChange={handleChange}
        /> 


      <div className={styles.addchart}>
        <label htmlFor="categoryTitle">Category Title: </label>
        <input 
         type="text" 
         name="categoryTitle"
         id="categoryTitle" 
         placeholder="e.g. Daily Tasks"
         value={input.categoryTitle}
         onChange={handleChange}
        /> 

        <label htmlFor="amountTitle">Amount Title: </label>
        <input 
         type="text" 
         name="amountTitle"
         id="amountTitle" 
         placeholder="e.g. Hours per Day"
         value={input.amountTitle}
         onChange={handleChange}
        /> 
</div>

      <div className={styles.addchart}>
        <label htmlFor="categoryone">First Category: </label>
        <input 
         type="text" 
         name="categoryone"
         id="categoryone" 
         placeholder="e.g. Eat"
         value={input.categoryone}
         onChange={handleChange}
        />  

        <label htmlFor="amountone">First Category Amount:</label>
        <input 
          type="number" 
          name="amountone" 
          id="amountone" 
          placeholder="e.g. 3"
          value={input.amountone}
          onChange={handleChange}
        /> 
      </div>

      <div className={styles.addchart}>
        <label htmlFor="categorytwo">Second Category: </label>
        <input 
         type="text" 
         name="categorytwo"
         id="categorytwo" 
         placeholder="e.g. Sleep"
         value={input.categorytwo}
         onChange={handleChange}
        />  

        <label htmlFor="amounttwo">Second Category Amount:</label>
        <input 
          type="number" 
          name="amounttwo" 
          id="amounttwo" 
          placeholder="e.g. 7"
          value={input.amounttwo}
          onChange={handleChange}
        /> 
      </div>
      
      <div className={styles.addchart}>
        <label htmlFor="categorythree">Third Category: </label>
        <input 
         type="text" 
         name="categorythree"
         id="categorythree" 
         placeholder="e.g. Work"
         value={input.categorythree}
         onChange={handleChange}
        />  

        <label htmlFor="amountthree">Third Category Amount:</label>
        <input 
          type="number" 
          name="amountthree" 
          id="amountthree" 
          placeholder="e.g. 8"
          value={input.amountthree}
          onChange={handleChange}
        /> 
      </div>

      <div className={styles.addchart}>
        <label htmlFor="categoryfour">Fourth Category: </label>
        <input 
         type="text" 
         name="categoryfour"
         id="categoryfour" 
         placeholder="e.g. Commute"
         value={input.categoryfour}
         onChange={handleChange}
        />  

        <label htmlFor="amountfour">Fourth Category Amount:</label>
        <input 
          type="number" 
          name="amountfour" 
          id="amountfour" 
          placeholder="e.g. 3"
          value={input.amountfour}
          onChange={handleChange}
        /> 
      </div>

      <div className={styles.addchart}>
        <label htmlFor="categoryfive">Fifth Category: </label>
        <input 
         type="text" 
         name="categoryfive"
         id="categoryfive" 
         placeholder="e.g. Watch TV"
         value={input.categoryfive}
         onChange={handleChange}
        />  

        <label htmlFor="amountfive">Fifth Category Amount:</label>
        <input 
          type="number" 
          name="amountfive" 
          id="amountfive" 
          placeholder="e.g. 3"
          value={input.amountfive}
          onChange={handleChange}
        />  
      </div>   

        <button>Submit</button>
          {error && <p>{error}</p>}
        </form>


        <div className={styles.grid}>
          <Link href="/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>View all your charts here.</p>
          </Link>
          <Link href="/" className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Return to the homepage.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

