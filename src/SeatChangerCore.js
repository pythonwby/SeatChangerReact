// SeatChangerReact 后端
// Author: pythonwby

function abs(x){
    if (x >= 0){
        return x;
    }
    return -x;
}

function countFridays(date) {
    if (holidayMode) return 0;
    let thurdaysCount = 0
    let startDate = new Date(date);
    let currentDate = new Date();
    if (startDate > currentDate) {
        throw new Error("开始时间晚于当前时间，无法进行计算。");
    }
    while (startDate <= currentDate){
        if(startDate.getDay() === 1){
            thurdaysCount++;
        }
        startDate.setDate(startDate.getDate() + 1)
    }
    return thurdaysCount;
}

function create2DArray(){
    let array = new Array(2);
    array[0] = new Array(26);
    array[1] = new Array(26);
    return array;
}

function resetSeatList(){
    for (let i = 0; i < 26; i++){
        seatList[0][i] = originSeatList[0][i];
        seatList[1][i] = originSeatList[1][i];
    }
}

export function nextWeekShift(){
    let a = seatList[0][23];
    let b = seatList[1][23];
    let c = seatList[0][24];
    let d = seatList[1][24];
    let e = seatList[0][25];
    let f = seatList[1][25];
    for (let i = 22; i > -1; i--){
        seatList[0][i + 3] = seatList[0][i];
        seatList[1][i + 3] = seatList[1][i];
    }
    seatList[0][0] = a;
    seatList[1][0] = b;
    seatList[0][1] = c;
    seatList[1][1] = d;
    seatList[0][2] = e;
    seatList[1][2] = f;
    weekCnt++;
}

export function lastWeekShift(){
    let a = seatList[0][0];
    let b = seatList[1][0];
    let c = seatList[0][1];
    let d = seatList[1][1];
    let e = seatList[0][2];
    let f = seatList[1][2];
    for (let i = 0; i < 23; i++){
        seatList[0][i] = seatList[0][i + 3];
        seatList[1][i] = seatList[1][i + 3];
    }
    seatList[0][23] = a;
    seatList[1][23] = b;
    seatList[0][24] = c;
    seatList[1][24] = d;
    seatList[0][25] = e;
    seatList[1][25] = f;
    weekCnt--;
}

export let reverseSeatImage = () => {reverseFlag = !reverseFlag}

export function shiftToNow(){
    resetSeatList();
    let weeks = countFridays(startTime);;
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

export function getWeekString(){
    if (weekCnt > 0) return weekCnt.toString() + "周后";
    if (weekCnt === 0) return "当前周";
    if (weekCnt < 0) return abs(weekCnt).toString() + "周前";
}

export function listToImage(){
    let image = new Array(7);
    for (let i = 0; i < 7; i++)
        image[i] = new Array(11);

    if (!reverseFlag){
        image[0] = [seatList[1][20], seatList[0][20], 0, seatList[1][13], seatList[0][13], 0, seatList[1][6] , seatList[0][6] , 0, seatList[1][0], seatList[0][0]];
        image[1] = [seatList[1][21], seatList[0][21], 0, seatList[1][14], seatList[0][14], 0, seatList[1][7] , seatList[0][7] , 0, seatList[1][1], seatList[0][1]];
        image[2] = [seatList[1][22], seatList[0][22], 0, seatList[1][15], seatList[0][15], 0, seatList[1][8] , seatList[0][8] , 0, seatList[1][2], seatList[0][2]];
        image[3] = [seatList[1][23], seatList[0][23], 0, seatList[1][16], seatList[0][16], 0, seatList[1][9] , seatList[0][9] , 0, seatList[1][3], seatList[0][3]];
        image[4] = [seatList[1][24], seatList[0][24], 0, seatList[1][17], seatList[0][17], 0, seatList[1][10], seatList[0][10], 0, seatList[1][4], seatList[0][4]];
        image[5] = [seatList[1][25], seatList[0][25], 0, seatList[1][18], seatList[0][18], 0, seatList[1][11], seatList[0][11], 0, seatList[1][5], seatList[0][5]];
        image[6] = [0              , 0              , 0, seatList[1][19], seatList[0][19], 0, seatList[1][12], seatList[0][12], 0, 0             , 0             ];
    }
    else{
        image[0] = [0             , 0             , 0, seatList[0][12], seatList[1][12], 0, seatList[0][19], seatList[1][19], 0, 0              , 0              ];
        image[1] = [seatList[0][5], seatList[1][5], 0, seatList[0][11], seatList[1][11], 0, seatList[0][18], seatList[1][18], 0, seatList[0][25], seatList[1][25]];
        image[2] = [seatList[0][4], seatList[1][4], 0, seatList[0][10], seatList[1][10], 0, seatList[0][17], seatList[1][17], 0, seatList[0][24], seatList[1][24]];
        image[3] = [seatList[0][3], seatList[1][3], 0, seatList[0][9] , seatList[1][9] , 0, seatList[0][16], seatList[1][16], 0, seatList[0][23], seatList[1][23]];
        image[4] = [seatList[0][2], seatList[1][2], 0, seatList[0][8] , seatList[1][8] , 0, seatList[0][15], seatList[1][15], 0, seatList[0][22], seatList[1][22]];
        image[5] = [seatList[0][1], seatList[1][1], 0, seatList[0][7] , seatList[1][7] , 0, seatList[0][14], seatList[1][14], 0, seatList[0][21], seatList[1][21]];
        image[6] = [seatList[0][0], seatList[1][0], 0, seatList[0][6] , seatList[1][6] , 0, seatList[0][13], seatList[1][13], 0, seatList[0][20], seatList[1][20]];
    }

    for (let i = 0; i < 7; i++)
        for (let j = 0; j < 11; j++)
            image[i][j] = numberToName[image[i][j]];

    return image;
}

const startTime = new Date("2024-10-10");
const weekShift = 0;            // 用于对座位进行整体偏移
const holidayMode = false;      // 假期模式，暂停座位更新，调整 weekShift 为当前周数即可使用，建议先将原周数注释
const numberToName = ["", "蔡宇轩", "陈锦轩", "陈怡杉", "代宇彤", "丁艺贝", 
                      "丁屹城","丁梓馨", "冯浚", "高千惠","郭俊雄","韩呈奕", 
                      "华婧朵", "晋熙儿","冷宣澄", "李欣蔓", "李育涵", "刘瑞琦",
                      "刘雅雯","刘姿雨", "柳子慧","罗梓涵", "毛家盼", "毛琳悦",
                      "孟雨禾", "潘志杰","彭悦", "秦树成","邱宣博","宋修仪",
                      "宋雅静", "孙浩涵", "汤文博", "汪君瑜", "王淑涵","魏晋宇",
                      "魏熠宸","吴博远", "吴谦益", "夏康洋", "向宏博", "熊梓煊",
                      "徐艺轩", "杨惜婷", "姚熙子正", "易峻熙","詹晨旺","张峻豪",
                      "赵艺涵","周子君", "熊通", "左恩森", "杨诗涵", "刘宛喆"];
const originSeatList = create2DArray();

export let reverseFlag = false;

originSeatList[0] = [25,47,50,36,7 ,53,3 ,24,29,13,38,21,31,32,17,45,37,27,12,26,18,20,39,5 ,49,10]; //靠右列
originSeatList[1] = [16,48,30,34,1 ,4 ,41,51,15,2 ,28,33,22,11,9 ,40,44,35,14,23,19,6 ,8 ,42,43,46]; //靠左列


let seatList = create2DArray();
resetSeatList();
let weekCnt = 0;
shiftToNow();
// nextWeekShift();                                //调试用
// nextWeekShift();
// nextWeekShift();
// nextWeekShift();
// let seatImage = listToImage();
// for (let i = 0; i < 8; i++)
//     console.log(seatImage[i]);
