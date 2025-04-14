
document.addEventListener('DOMContentLoaded', async () => {
    const Data_of_all = Array_data();
    await localStorage.setItem('graph_data', JSON.stringify(Data_of_all));
    const data = await localStorage.getItem('graph_data')
    BobbleSort(JSON.parse(data))
})

function reset() {
    location.reload()
}

function BobbleSort(data) {
    const myParent_graph = document.querySelector('.my-graph')
    myParent_graph.innerHTML = ''
    data.forEach(element => {
        const myChild_graph = document.createElement('li');
        myChild_graph.setAttribute('class', 'my-graph-list')
        myChild_graph.innerHTML = `<div>${element.value}</div>`
        myChild_graph.style.backgroundColor = element.color
        myChild_graph.style.height = `${element.value}0px`;
        myChild_graph.style.width = '50px'
        myParent_graph.appendChild(myChild_graph)
    });
}

const Array_data = () => {
    const my_array = []
    for (let index = 0; index < 10; index++) {
        const array_value = parseFloat(Math.random() * 25).toFixed()
        const r = parseFloat(Math.random() * 255).toFixed()
        const g = parseFloat(Math.random() * 255).toFixed()
        const b = parseFloat(Math.random() * 255).toFixed()
        const array_ref = { value: array_value, color: `rgb(${r}, ${g}, ${b})` };
        my_array.push(array_ref)
    }
    return my_array;
}


const AssendingArray = async () => {
    const response = await localStorage.getItem('graph_data');
    const data = JSON.parse(response)
    let swapper;
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - 1 - i; j++) {
            if (parseInt(data[j]["value"]) > parseInt(data[j + 1]["value"])) {
                swapper = data[j + 1];
                data[j + 1] = data[j];
                data[j] = swapper
            }
        }
    }

    BobbleSort(data);

}









// // image saver rm

// export const handleImageLibraryLaunchFunction = () => {
//   return new Promise(async (resolve, reject) => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: true,
//       maxHeight: 1500,
//       maxWidth: 1500,
//     };
    
//     launchImageLibrary(options, response => {
//       if (!response.didCancel && !response.error) {
//         const image = response.assets[0]
//         console.log(image.fileSize, "photo size");
//         if (image.fileSize <= 1000 * 1024) {
//           const data = {
//             status: 'success',
//             data: response.assets[0],
//           };
//           resolve(data);
//         } else {
//           console.log("File size is to large")
//           const errorData = {
//             status: 'error',
//             message: "File size must be less than 1MB."
//           }
//           reject(errorData)
//         }
//       } else {
//         const errorData = {
//           status: 'error',
//           message: 'Image selection canceled or failed.'
//         };
//         reject(errorData);
//       }
//     });
//   });
// };


// // camera 

// export const handleCameraLaunchFunction = async () => {
//   return new Promise(async (resolve, reject) => {
//     let permission = await requestCameraPermission();
//     if (permission) {
//       const options = {
//         mediaType: 'photo',
//         includeBase64: true,
//         maxHeight: 1500,
//         maxWidth: 1500,
//       };
//       launchCamera(options, response => {
//         if (!response.didCancel && !response.error) {
//           const data = {
//             status: 'success',
//             data: response.assets[0],
//           };
//           resolve(data);
//         } else {
//           const errorData = {
//             status: 'error',
//           };
//           reject(errorData);
//         }
//       });
//     } else {
//       const errorData = {
//         status: 'error',
//         message: 'Camera permission not granted',
//       };
//       reject(errorData);
//     }
//   });
// };