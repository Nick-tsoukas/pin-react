function Post({title, date }) {
    return (
      <div>
        <h1 className="red">This is something</h1>
        <style jsx>{`
          .container {
            cursor: pointer;
            height: 453px;
            margin-bottom: 48px;
          }
          a {
            border-bottom: none;
          }
          a:hover {
            border-bottom: none;
          }
          .red {
            color: red;
          }
          .text {
            margin-top: -160px;
            padding: 24px;
            position: absolute;
          }
          h2 {
            color: white;
            font-size: 24px;
            margin-bottom: 0;
          }
          h4 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            font-weight: 500;
            margin-top: 8px;
          }
        `}</style>
      </div>
    )
  }
  
  export default Post