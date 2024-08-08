function abs(x){
    if (x >= 0){
        return x;
    }
    return -x;
}

function countThursdays(date) {
    let thurdaysCount = 0
    let startDate = date;
    let currentDate = new Date();
    if (startDate > currentDate) return -9999;
    while (startDate <= currentDate){
        if(startDate.getDay() === 4){
            thurdaysCount++;
        }
        startDate.setDate(startDate.getDate() + 1)
    }
    return thurdaysCount;
}

function creat2DArray(){
    let array = new Array(2);
    array[0] = new Array(25);
    array[1] = new Array(25);
    return array;
}

function resetSeatList(){
    for (let i = 0; i < 25; i++){
        seatList[0][i] = originSeatList[0][i];
        seatList[1][i] = originSeatList[1][i];
    }
}

function nextWeekShift(){
    let a = seatList[0][23];
    let b = seatList[1][23];
    let c = seatList[0][24];
    let d = seatList[1][24];
    for (let i = 22; i > -1; i--){
        seatList[0][i + 2] = seatList[0][i];
        seatList[1][i + 2] = seatList[1][i];
    }
    seatList[0][0] = a;
    seatList[1][0] = b;
    seatList[0][1] = c;
    seatList[1][1] = d;
    weekCnt++;
}

function lastWeekShift(){
    let a = seatList[0][0];
    let b = seatList[1][0];
    let c = seatList[0][1];
    let d = seatList[1][1];
    for (let i = 0; i < 23; i++){
        seatList[0][i] = seatList[0][i + 2];
        seatList[1][i] = seatList[1][i + 2];
    }
    seatList[0][23] = a;
    seatList[1][23] = b;
    seatList[0][24] = c;
    seatList[1][24] = d;
    weekCnt--;
}

function shiftToNow(){
    resetSeatList();
    let weeks = countThursdays(startTime);
    weeks += weekShift;
    if (weeks >= 0){
        for (let i = 0; i < weeks; i++){
            nextWeekShift();
        }
        weekCnt = 0;
    }else if (weeks < 0){
        throw new Error("开始时间晚于当前时间，无法进行计算。");
    }
}

function getWeekString(){
    if (weekCnt > 0) return weekCnt.toString() + "周后";
    if (weekCnt === 0) return "当前周";
    if (weekCnt < 0) return abs(weekCnt).toString() + "周前";
}

function listToImage(){
    let image = new Array(8);
    for (let i = 0; i < 8; i++)
        image[i] = new Array(9);
    
    image[0] = [0              , 44             , 0, seatList[1][14], seatList[1][6],  seatList[0][6],  0, 0             , 0             ];
    image[1] = [seatList[1][18], seatList[0][18], 0, seatList[0][14], seatList[1][7],  seatList[0][7],  0, seatList[1][0], seatList[0][0]];
    image[2] = [seatList[1][19], seatList[0][19], 0, seatList[1][15], seatList[1][8],  seatList[0][8],  0, seatList[1][1], seatList[0][1]];
    image[3] = [seatList[1][20], seatList[0][20], 0, seatList[0][15], seatList[1][9],  seatList[0][9],  0, seatList[1][2], seatList[0][2]];
    image[4] = [seatList[1][21], seatList[0][21], 0, seatList[1][16], seatList[1][10], seatList[0][10], 0, seatList[1][3], seatList[0][3]];
    image[5] = [seatList[1][22], seatList[0][22], 0, seatList[0][16], seatList[1][11], seatList[0][11], 0, seatList[1][4], seatList[0][4]];
    image[6] = [seatList[1][23], seatList[0][23], 0, seatList[1][17], seatList[1][12], seatList[0][12], 0, seatList[1][5], seatList[0][5]];
    image[7] = [seatList[1][24], seatList[0][24], 0, seatList[0][17], seatList[1][13], seatList[0][13], 0, 0             , 0             ];

    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 9; j++)
            image[i][j] = numberToName[image[i][j]];

    return image;
}

const startTime = new Date("2024-06-06");
const weekShift = 0;
const numberToName = ["", "蔡宇轩", "陈锦轩", "陈怡杉", "代宇彤", "丁艺贝", "丁屹城",
                      "丁梓馨", "冯浚", "高千惠","郭俊雄","韩呈奕", "华婧朵", "晋熙儿",
                      "冷宣澄", "李欣蔓", "李育涵", "刘瑞琦", "刘雅雯","刘姿雨", "柳子慧",
                      "罗梓涵", "毛家盼", "毛琳悦", "孟雨禾", "潘志杰","彭悦", "秦树成",
                      "邱宣博","宋修仪", "宋雅静", "孙浩涵", "汤文博", "汪君瑜", "王淑涵",
                      "魏晋宇", "魏熠宸","吴博远", "吴谦益", "夏康洋", "向宏博", "熊梓煊",
                      "徐艺轩", "杨惜婷", "姚熙子正", "易峻熙","詹晨旺","张峻豪", "赵艺涵",
                      "周子君", "熊通", "左恩森"];
const originSeatList = creat2DArray();
originSeatList[0] = [33,2,10,41,23,24,48,35,14,49,17,12,15,16,6,34,20,30,3,42,51,45,32,7,40]; //靠左列，第五组靠后
originSeatList[1] = [37,19,11,9,21,26,46,50,47,13,22,31,18,29,4,25,1,28,43,8,39,27,36,5,38];  //靠右列，第五组靠前

let seatList = creat2DArray();
resetSeatList();
let weekCnt = 0;
shiftToNow();
// nextWeekShift();
// nextWeekShift();
// nextWeekShift();
// nextWeekShift();
// let seatImage = listToImage();
// for (let i = 0; i < 8; i++)
//     console.log(seatImage[i]);


export default listToImage;