import React from "react";
import ProductCards from "./components/ProductCards"; 

const App = () => {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      <ProductCards
        name="Laptop MacBook Pro"
        image="https://i.pinimg.com/736x/e4/76/c7/e476c7dc33a4580e2175955289dd8fb3.jpg"
        description="Máy tính xách tay hiệu suất cao cho công việc và sáng tạo."
      />
      <ProductCards
        name="Điện thoại iPhone 14"
        image="https://i.pinimg.com/736x/a9/37/24/a9372495a504c40c38d5215ba45f5303.jpg"
        description="Chiếc điện thoại mạnh mẽ với camera xuất sắc."
      />
      <ProductCards
        name="Tai nghe Sony WH-1000XM4"
        image="https://i.pinimg.com/736x/b6/12/33/b612334b747ebe1e10e6fdbb7be15651.jpg"
        description="Tai nghe chống ồn tốt nhất với chất lượng âm thanh tuyệt vời."
      />
    </div>
  );
};

export default App;
