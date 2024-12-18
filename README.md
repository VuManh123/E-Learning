# Online Learning Website

## Giới thiệu

Dự án **Online Learning Website** là một nền tảng học trực tuyến được thiết kế để cung cấp các khóa học về lập trình, điện toán đám mây và nhiều lĩnh vực khác. Nền tảng này cho phép người dùng đăng ký, truy cập vào các khóa học dưới dạng video, tài liệu học tập và bài kiểm tra. Hệ thống đảm bảo bảo mật mạnh mẽ bằng cách sử dụng **JWT (JSON Web Token)** cho quá trình xác thực và bảo vệ dữ liệu người dùng. Giao diện của trang web được phát triển theo hướng **responsive**, đảm bảo tương thích với mọi loại thiết bị từ máy tính để bàn đến điện thoại di động, mang lại trải nghiệm người dùng tuyệt vời.

## Tính năng chính

1. **Đăng ký và Đăng nhập người dùng**: Người dùng có thể tạo tài khoản, đăng nhập vào hệ thống và quản lý tài khoản của mình một cách bảo mật.
2. **Xác thực JWT**: Hệ thống sử dụng JWT để bảo vệ các API quan trọng và đảm bảo rằng chỉ những người dùng đã xác thực mới có thể truy cập vào các nội dung khóa học.
3. **Quản lý khóa học**: Người dùng có thể duyệt, đăng ký, và tham gia các khóa học với nhiều dạng nội dung khác nhau như video, tài liệu, và bài kiểm tra.
4. **Bài kiểm tra**: Hệ thống hỗ trợ việc tạo và làm bài kiểm tra để đánh giá kiến thức của người dùng sau khi hoàn thành khóa học.
5. **Responsive design**: Giao diện web được thiết kế chuẩn **responsive**, đảm bảo hiển thị tốt trên mọi thiết bị từ PC đến điện thoại.

## Công nghệ sử dụng

### Backend

- **Node.js**: Backend được xây dựng bằng Node.js giúp xử lý các request của người dùng và giao tiếp với cơ sở dữ liệu.
- **Sequelize ORM**: Được sử dụng để tương tác với cơ sở dữ liệu MySQL, giúp đơn giản hóa việc truy vấn và quản lý dữ liệu.
- **MySQL**: Cơ sở dữ liệu MySQL được sử dụng để lưu trữ thông tin khóa học, người dùng và các dữ liệu khác liên quan.
- **JWT (JSON Web Token)**: Được sử dụng để xác thực và bảo vệ các API, đảm bảo rằng chỉ người dùng có thẩm quyền mới có thể truy cập các tính năng đặc biệt.

### Frontend

- **ReactJS**: Giao diện người dùng được xây dựng bằng ReactJS giúp tạo ra các trang web có khả năng tương tác cao và tốc độ nhanh.
- **Responsive design**: Giao diện được thiết kế linh hoạt với CSS và các thư viện hỗ trợ để đảm bảo trải nghiệm người dùng tối ưu trên nhiều loại thiết bị.

## Cấu trúc dự án

```bash
Online-Learning-Website/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
├── README.md
└── package.json
