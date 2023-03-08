import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex items-left text-left h-screen flex-col">
      <Head>
        <title>File Q&A</title>
      </Head>
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800">
        <h1 className="text-4xl">Humax Q&A</h1>

        <div className="">
          To search for answers from the content derived from uk.humax.co.uk.
          This content was scraped from the site and uses OpenAI embeddings and GPT to find answers from the
          content.<br /><br />
This could be part of a more indepth search OR Help me choose feature OR chat service.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={75}
          maxFileSizeMB={30}
        />

        <FileQandAArea files={files} />
      </div>
    </div>
  );
}
