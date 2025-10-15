import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

import React from "react";

const ProfilePicture = () => {
  const handleUpload = (fileInfo: { cdnUrl: string }) => {
    console.log("Upload finished:", fileInfo);
    if (fileInfo.cdnUrl) {
      console.log("File uploaded:", fileInfo.cdnUrl);
    }
  };

  return (
    <div className="mb-5">
      <div>
        <FileUploaderRegular
          sourceList="local, camera"
          classNameUploader="uc-light"
          pubkey="3e0865c1b01c4eff2036"
          onFileUploadSuccess={handleUpload}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
