import { Image, Button, Space } from 'antd';

function ImageDemo(props) {
    // state = {
    //     previewVisible: false,
    //     previewImage: '',
    //     previewTitle: '',
    //     file:"" ,
    // };
    // handleChange = ( file ) => {
    //     this.setState({file});
    
    // }
    return (
        <Space>
    <Image
      width={100}
      src={props.src}
    />
    <Button
        className="ps-btn"
        type="primary"
        // onClick={handleChange}
        >
        Changer
        </Button>
        </Space>

    );
}
export default ImageDemo;