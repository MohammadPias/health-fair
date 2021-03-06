const doctors = [
    {name: 'Dr. Razaul Karim', id: 1, type: 'Cardiologist', consulting_fee: 12000, age: 46, url: 'https://media.istockphoto.com/photos/indian-doctor-picture-id179011088?s=170667a'},
    {name: 'Dr. Hasan Shahriar', id: 2, type: 'Audiologist', consulting_fee: 10000, age: 42, url:'https://st.depositphotos.com/2702761/3304/i/950/depositphotos_33044395-stock-photo-doctor-smiling.jpg'},
    {name: 'Dr. Golam Kibria', id: 3, type: 'Dentist', consulting_fee: 8000, age: 32, url: 'https://thumbs.dreamstime.com/b/portrait-indian-doctor-picture-wearing-medical-coat-isolated-white-background-129145938.jpg'},
    {name: 'Dr. Farjana Akter', id: 4, type: 'ENT specialist', consulting_fee: 14000, age: 28, url:'https://image.shutterstock.com/image-photo/covid19-coronavirus-healthcare-doctors-concept-260nw-1687768795.jpg'},
    {name: 'Dr. Tasnia Karim', id: 5, type: 'Gynaecologist', consulting_fee: 12000, age: 29, url: 'https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg'},
    {name: 'Dr. Alamgir Hossain', id: 6, type: 'Orthopaedic ', consulting_fee: 13000, age: 32, url: 'https://img.freepik.com/free-photo/doctor-smiling-offering-hand_23-2148075683.jpg?size=338&ext=jpg'},
    {name: 'Dr. Razaul Karim', id: 7, type: 'Neurologist', consulting_fee: 15500, age: 34, url: 'https://static.vecteezy.com/system/resources/previews/002/853/531/non_2x/doctor-smiling-and-looking-at-phone-pakistani-man-doctor-technology-medicine-at-home-photo.jpg'},
    {name: 'Dr. Alvia Sarkar', id: 8, type: 'Paediatrician', consulting_fee: 10000, age: 33, url: 'https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg'},
    {name: 'Dr. Anowar Haque', id: 9, type: 'Oncologist', consulting_fee: 12500, age: 55, url: 'https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6'},
    {name: 'Dr. Ashraful Alam', id: 10, type: 'Psychiatrists', consulting_fee: 12000, age: 37, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtiKmtj52K04VKMLPj8DEwjy1dz3oe2Sr4Vnu50oWKWyUoNLWSJVw9lcLUU6p55AYx0g&usqp=CAU'},
    {name: 'Dr. Rafiqul Islam', id: 11, type: 'Veterinarian', consulting_fee: 11500, age: 53, url: 'https://thumbs.dreamstime.com/z/cheerful-mature-doctor-posing-smiling-camera-healthcare-medicine-cheerful-mature-doctor-posing-smiling-camera-146192162.jpg'},
    {name: 'Dr. Kamrun Nahar', id: 12, type: 'Radiologist', consulting_fee: 10000, age: 30, url: 'https://previews.123rf.com/images/gladkov/gladkov1706/gladkov170600014/80730224-smiling-beautiful-doctor-with-arms-crossed-isolated-on-white-background.jpg'},
];
const stringified = JSON.stringify(doctors);
console.log(stringified)