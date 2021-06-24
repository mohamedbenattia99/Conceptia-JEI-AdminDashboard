// import { Image, Button, Space } from 'antd';
// import { useState } from 'react';

// function ImageDemo(props) {
//     const [image, setImage] = useState(
//         {
//             preview: "",
//             raw: ""
//         }
//     );


//     const handleChange = (e) => {
//         setImage({
//             preview: URL.createObjectURL(e.target.files[0]),
//             raw: e.target.files[0]
//            })
//     };

//     const handleUpload = async e => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("image", image.raw);

//         await fetch("YOUR_URL", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             },
//             body: formData
//         });
//     };

//     return (
//         <Space>
//             {image.preview ? (
//                 <Image
//                     width={100}
//                     src={image.preview}
//                 />
//             ) : (
//                 <>
//                 <Image
//                     width={100}
//                     src={props.src}
//                 />
//                 <p>Upload a photo</p>
//                 </>
//             )}

//             <input
//                 type="file"
//                 id="upload-button"
//                 style={{ display: "none" }}
//                 onChange={handleChange}
//             />

//             <Button
//                 className="ps-btn"
//                 type="primary"
//                 onClick={handleUpload}
//             >
//                 Changer
//             </Button>
//         </Space>

//     );
// }
// export default ImageDemo;


// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';

// const ImageDemo = () => {
//   const [fileList, setFileList] = useState([
//     {
//       uid: '-1',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
// ]);

//   const onChange =  ({ fileList: newFileList }) => {
//     setFileList(newFileList);

//   };

//   const onPreview = async file => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise(resolve => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow.document.write(image.outerHTML);
//   };


//   return (
//     <ImgCrop rotate>
//       <Upload
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         listType="picture-card"
//         file={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//         maxCount={1}
//       >
//         {fileList.length < 2  && '+ Upload'}
//       </Upload>
//      </ImgCrop> 
//   );
// };

// export default ImageDemo;


import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const ImageDemo = () => {
return(
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
    //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
  </Space>
)
  }
  export default ImageDemo ; 