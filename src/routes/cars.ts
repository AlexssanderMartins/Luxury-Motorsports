export interface Car {
    name: string,
    description: string,
    price: string,
    img: string,
    copy: string
}

export const carList: Car[] = [
    {name: '2023 Challenger SRT', price: '150', description: "Experince The New 2023 Dodge Demon", img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/srt/desktop/desktop_Hero_Banner_01.jpg", copy: "https://www.dodge.com/challenger/srt.html"},
    {name: '2023 GR Supra', price: '120', description: "Experince The Fresh 2023 GR Supra", img: "https://toyotaassets.scene7.com/is/image/toyota/SUP_MY23_0011_V001?fmt=jpeg&fit=crop&qlt=90&wid=1500", copy: "https://www.toyota.com/grsupra/"},
    {name: '2023 Dodge Durango ', price: '110', description: "Experince The Clean 2023 Dodge Durango ", img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/durango/vlp/desktop/MY23Durango_VLP_Desktop_heroposter.jpg", copy: "https://www.dodge.com/durango/srt.html"},
    {name: '2020 Chevrolet Corvette', price: '150', description: "Experince The Hot 2020 Chevrolet Corvette", img: "https://hips.hearstapps.com/hmg-prod/images/spotlight-c8v1-1571150636.jpg?crop=1.00xw:0.667xh;0,0.124xh&resize=2048:*", copy: "https://www.caranddriver.com/chevrolet/corvette-2020"},
    {name: 'Mclaren Artura', price: '180', description: "Experince The Mclaren Artura", img: "https://mclaren.scene7.com/is/image/mclaren/McLarenArtura-7-1?wid=1536&hei=1025", copy: "https://cars.mclaren.com/en/artura"},
    {name: '718 Cayman', price: '160', description: "Experince The 718 Cayman", img: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-01/zoom2/a4eb987d-c173-11ec-80ef-005056bbdc38;sO;twebp065/porsche-zoom2.webp", copy: "https://www.porsche.com/usa/models/718/718-models/718-cayman/"},
];