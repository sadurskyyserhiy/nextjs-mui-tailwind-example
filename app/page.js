import Image from "next/image";
import styles from "./page.module.css";
import { Button, Slider } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <h2>Customizations</h2>
        <p>
          This app is pre-configured with Next.js 15, Material UI (MUI) v6, and
          Tailwind CSS v3. You can customize the configuration by editing the{" "}
          <code>tailwind.config.js</code> file.
        </p>
        <p className="text-2xl text-red-500">This is tailwind styled text</p>
        <Button variant="contained" color="primary">
          Material UI Button
        </Button>
        <Button
          variant="contained"
          className="bg-gradient-to-r from-green-400 to-blue-50 p-2 text-black"
        >
          Material UI Button with Tailwind CSS
        </Button>

        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
      </main>
    </div>
  );
}
