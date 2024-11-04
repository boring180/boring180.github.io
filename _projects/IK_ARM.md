---
layout: page
title: IK arm
description: A 5-axis arm controlled by Inverse Kinematics
img:
importance: 1
category: robotics
---
# This is the final project of ISDN 2601

In this project, I use inverse Kinematics(IK) to calculate the rotation of the arm's joints and use the arm actuator program to apply the calculation results.

Since we are moving blocks from fixed areas, I modified my program to be coordinately oriented.

According to my previous findings, there should be three modes to reach the target coordinate. The angle between the claw and the ground is 180, 90, and 135. Since we are using the claw to the other side of the coordinate, there should be six modes instead. Some of them might be useless. I’ll delete them later.

## The logic flow of the program should look like this:

1. The user input the sequence of the fixed locations
2. A for loop to control the input and place function
3. The intake and place functions and the location read function input the coordinate to the calculation function.
4. The calculation function read the coordinate and sign them to different modes of IK.
5. The polar coordinate function decides the angle of rot1 and the sign of other angels.
6. The Cartesian coordinate function calculates the rest of the angels.
7. Check the function to decide whether the mode is valid.
8. The arms control function to control the arm of the target position.

## The following section is the codes:

- The full code

```cpp

//For modifications

constint movetime =2000;

int sequence[9] = {1,9,4,3,7,6};

//Include the libraries

#include <HardwareSerial.h>

#include "arm_cmd.h"

//Set the port

#define MCU_TX      26                // set GPIO26 as MCU_TX

#define MCU_TX_CON  25                // set GPIO25 as MCU_TX_CON

#define MCU_RX      35                // set GPIO35 as MCU_RX

#define MCU_RX_CON  12                // set GPIO12 as MCU_RX_CON

HardwareSerialuart2(2);

double rot1 =0;

//Setup function

voidsetup() {

pinMode(MCU_TX_CON, OUTPUT);        // set MCU_TX_CON as output

pinMode(MCU_RX_CON, OUTPUT);        // set MCU_RX_CON as output

  //Note: When we want transmit data, TX should be high, RX should be low

output();

  uart2.begin(115200, SERIAL_8N1, MCU_RX, MCU_TX, false, 200);  // initialize UART2 with baud rate of 115200

  Serial.begin(115200);                                         // initialize Serial Monitor with same baud rate

  Serial.println("UART2 Initialized");

}

//UART input and output

voidoutput(){

digitalWrite(MCU_TX_CON,1);

digitalWrite(MCU_RX_CON,0);

}

voidinput(){

digitalWrite(MCU_TX_CON,0);

digitalWrite(MCU_RX_CON,1);

}

//checksum function

uint8_tcalc_checksum(uint8_t*buf_data, uint8_tbuf_size){

uint8_t sum =0;

for(int i =0; i < buf_size; i++){

    sum += buf_data[i];

  }

  // remember to return the negation ~ of the sum

return~sum;

}

//Servo wrtie

voidservo_move_time_write(uint8_tservo_id, intangle_degree, inttime_ms){

uint8_t buf[10];                        // total 10 bytes of the UART command

int temp;

  buf[0] = ARM_HEADER;                    // 0x55

  buf[1] = ARM_HEADER;                    // 0x55

  buf[2] = servo_id;                      // ID number

  buf[3] =7;                             // Data length

  buf[4] = ARM_SERVO_MOVE_TIME_WRITE;     // COMMAND: 0x01

  temp = angle_degree*100/24;             // mapping the angle degree into 0-1000 range

  buf[5] = temp &0xFF;                               // lower byte of angle value

  buf[6] = temp >>8;                               // upper byte of angle value

  buf[7] = time_ms &0xFF;                               // lower byte of time_ms

  buf[8] = time_ms >>8;                               // upper byte of time_ms

  buf[9] =calc_checksum(&buf[2], 7);     // checksum of (ID + Length + CMD + Prm1 + ... PrmN)

  // send the UART command of SERVO_MOVE_TIME_WRITE

for(int i=0; i<10; i++)

  {

    uart2.write(buf[i]);

  }

}

//Use six parameters to control the postion of the arm

voidarm_move(ints1, ints2, ints3, ints4, ints5, ints6, inttime){

output();

if (uart2.availableForWrite()){

servo_move_time_write(1,s6,time);

servo_move_time_write(2,120+s5,time);

servo_move_time_write(3,120+s4,time);

servo_move_time_write(4,120+s3,time);

servo_move_time_write(5,120+s2,time);

servo_move_time_write(6,120+s1,time);

  }

delay(time);

}

//Reset

voidreset(){

  Serial.println("Resetting");

arm_move(rot1,0,-90,-90,0,240,movetime);

}

voidresetO(){

  Serial.println("Resetting");

arm_move(rot1,0,-90,-90,0,0,movetime);

}

//The IK constant

constint ROT1_MIN =-150;  // minimum angle for joint 1

constint ROT1_MAX =150;   // maximum angle for joint 1

constint ROT2_MIN =-90;  // minimum angle for joint 3

constint ROT2_MAX =90;   // maximum angle for joint 2

constint ROT3_MIN =-120;  // minimum angle for joint 3

constint ROT3_MAX =120;   // maximum angle for joint 3

constint L0 =55;

constint L1 =101;

constint L2 =95;

constint L3 =145;

//Golbal varaible

double L;

double rot2;

double rot3;

double rot4;

double rot5 =0;

double rot6;

int negative;

int XT;

int YT;

int ZT;

int picktime =0;

int lift;

int take =1;

int DROPFIVE =0;

//The corrdinates

constint OX =480;  constint OY =280;

constint SX =270;  constint SY =275;

constint AX =215;  constint AY =280;

constint BX =290;  constint BY =180;

constint CX =455;  constint CY =140;

constint DX =610;  constint DY =130;

constint EX =775;  constint EY =270;

constint FX =740;  constint FY =440;

constint GX =580;  constint GY =470;

constint HX =460;  constint HY =430;

constint IX =333;  constint IY =420;

//Angle transition

voidangtorad(double*angle){

*angle =*angle * PI /180;

}

voidradtoango(double*rad){

*rad =*rad / PI *180;

}

//Check if avaiable

boolcheck(){

if((rot1 > ROT1_MIN && rot1 < ROT1_MAX) && (rot2 > ROT2_MIN && rot2 < ROT2_MAX) && (rot3 > ROT3_MIN && rot3 < ROT3_MAX)){

return1;

  }

else{

return0;

  }

}

//Read the character to get the coordinate value

voidreadlocation(intlocation){

if(location ==1){

    XT = AX; YT = AY; ZT =0;

  }

elseif(location ==2){

    XT = BX; YT = BY; ZT =0;

  }

elseif(location ==3){

    XT = CX; YT = CY; ZT =5;

  }

elseif(location ==4){

    XT = DX; YT = DY; ZT =0;

  }

elseif(location ==5){

    XT = EX; YT = EY; ZT =10;

  }

elseif(location ==6){

    XT = FX; YT = FY; ZT =10;

  }

elseif(location ==7){

    XT = GX; YT = GY; ZT =0;

  }

elseif(location ==8){

    XT = HX; YT = HY; ZT =0;

  }

elseif(location ==9){

    XT = IX; YT = IY; ZT =-10;

  }

elseif(location ==0){

    XT = SX; YT = SY; ZT = picktime *40-10;

  }

elseif(location ==10){//150mode

    XT =659; YT =107; ZT =0;

  }

elseif(location ==11){//180mode for pick up

    XT =664; YT =92; ZT =0;

  }

elseif(location ==13){//180mode for drop

    XT =649; YT =97; ZT =0;

  }

}

//Calculate the polar coordinate

voidpolar(){

  XT -= OX;

  YT -= OY;

  YT *=-1;

  L =sqrt(sq(XT)+sq(YT));

  rot1 =abs(atan2(abs(YT),abs(XT)));

radtoango(&rot1);

if(XT ==0){

if(YT >0){

    rot1 =90;

    }

else{

    rot1 =-90;

    }

  }

if(YT ==0){

    rot1  =0;

  }

if(XT <0){

    //When x < 0

    negative =1;

    lift =-30;

    rot1 *=-1;

  }

else{

    negative =0;

    lift =30;

  }

if(YT <0){

    rot1 *=-1;

  }

}

//Calculate the Cartesian coordinate

voidcart(intcube){

double theta1;

double theta2;

  ZT -= L0;

  ZT +=30;//This can catch the midlle

  /*switch (mode){

   case 1://Vertical

    ZT += L3;

    ZT -= 15;

    theta2 = PI - acos(  (sq(L1)+sq(L2)-sq(L)-sq(ZT))  / (2 * L1 * L2)  );

    theta1 = atan2(L , ZT) - atan2(L2 * sin(theta2) , (L1 + (L2 * cos(theta2))));

    radtoango(&theta1);

    radtoango(&theta2);

    rot2 = theta1;

    rot3 = -theta2;

    rot4 = -rot2+rot3+180;

    ZT -= L3;

    ZT += 15;

    break;

    case 3://Horizontal*/

if(cube ==5|| cube ==6|| cube ==11|| cube ==12|| cube ==13){

    L -= L3;

    theta2 = PI -acos(  (sq(L1)+sq(L2)-sq(L)-sq(ZT))  / (2* L1 * L2)  );

    theta1 =atan2(L , ZT) -atan2(L2 *sin(theta2) , (L1 + (L2 *cos(theta2))));

radtoango(&theta1);

radtoango(&theta2);

    rot2 = theta1;

    rot3 =-theta2;

    rot4 =-rot2+rot3+90 ;

    L += L3;}

    /*break;

    case 2://135

    */else{

    L +=10;

    ZT +=10;

    L -= (L3 /2*sqrt(2));

    ZT += (L3 /2*sqrt(2));

    theta2 = PI -acos(  (sq(L1)+sq(L2)-sq(L)-sq(ZT))  / (2* L1 * L2)  );

    theta1 =atan2(L , ZT) -atan2(L2 *sin(theta2) , (L1 + (L2 *cos(theta2))));

radtoango(&theta1);

radtoango(&theta2);

    rot2 = theta1;

    rot3 =-theta2;

    rot4 =-rot2+rot3+150;

    L += (L3 /2*sqrt(2));

    ZT -= (L3 /2*sqrt(2));

    L -=10;

    ZT -=10;

    }/*

    break;

  }*/

if(negative ==1){

    rot2 *=-1;

    rot3 *=-1;

    rot4 *=-1;

  }

if(check() ==0){

    Serial.println("**********OUT OF RANGE**********");

    rot1 =0;rot2 =0;rot3 =0;rot4 =0;rot5 =0;rot6 =0;

  }

}

voidFS(intcube){

readlocation(cube);

polar();

cart(cube);

  rot6 =0;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4+(lift/6),rot5,rot6,movetime);

  rot6 =240;

arm_move(rot1,rot2,rot3,rot4+(lift/6),rot5,rot6,500);

reset();

readlocation(0);

  ZT +=15;

polar();

cart(12);

  rot6 =240;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,movetime);

  rot6 =0;

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,500);

  picktime++;

resetO();

  DROPFIVE =1;

}

voidFSI(){

readlocation(10);

polar();

cart(10);

  rot6 =240;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4-(lift/3),rot5,rot6,movetime);

  rot6 =0;

arm_move(rot1,rot2,rot3,rot4-(lift/3), rot5,rot6,500);

resetO();

readlocation(11);

polar();

cart(11);

  rot6 =0;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,movetime);

  rot6 =240;

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,500);

reset();

readlocation(0);

  ZT +=15;

polar();

cart(12);

  rot6 =240;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,movetime);

  rot6 =0;

arm_move(rot1,rot2,rot3,rot4,rot5,rot6,500);

  picktime++;

resetO();

}

//The intake actuater program

voidintake(intcube){

  take =1;

readlocation(cube);

if(cube ==5|| cube ==6){

FS(cube);

return;

    }

polar();

cart(cube);

  rot6 =0;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4-(lift/3),rot5,rot6,movetime);

  rot6 =240;

arm_move(rot1,rot2,rot3,rot4-(lift/3),rot5,rot6,500);

reset();

}

//The place actuater program

voidplace(){

if(DROPFIVE ==1){

    DROPFIVE =0;

return;

  }

  take =0;

readlocation(0);

if(picktime >2){

FSI();

return;

  }

polar();

cart(0);

  rot6 =240;

showcord();showrotation();

arm_move(rot1,rot2,rot3,rot4-(lift/3),rot5,rot6,movetime);

  rot6 =0;

arm_move(rot1,rot2,rot3,rot4-(lift/3),rot5,rot6,500);

resetO();

  picktime++;

}

//Output the coordinate for debug

voidshowcord(){

  Serial.print(XT);

  Serial.print("\t");

  Serial.print(YT);

  Serial.print("\t");

  Serial.println(ZT);

}

//Output the rotations for debug

voidshowrotation(){

  Serial.print(rot1);

  Serial.print("\t");

  Serial.print(rot2);

  Serial.print("\t");

  Serial.print(rot3);

  Serial.print("\t");

  Serial.print(rot4);

  Serial.print("\t");

  Serial.print(rot5);

  Serial.print("\t");

  Serial.println(rot6);

}

voidloop() {

  Serial.print("Greetings!Input the block sequence in serial monitor below: ");

  /*

  for(int i = 0;i<6;i++){

  while(1){

  if (Serial.available() > 0) {

    if(int(Serial.read()) == -1) {

    Serial.println("Received");

    break;

    }

    else{

    sequence[i] = int(Serial.read());

    Serial.print("Digit: ");

    Serial.print(i+1);

    Serial.print(" Received: ");

    Serial.println(sequence[i]);

    }

  }

  }

  }

   for(int i=0;i<6;i++){

    if(sequence[i]<0 || sequence[i]>10){

    Serial.println("SEQUENCE ERROR");

    return;

    }

  }

  */

  Serial.print("The sequence you input is:  ");

for(int i=0;i<6;i++){

    Serial.print(sequence[i]);

    Serial.print("\t");

  }

  Serial.print("\n");

reset();

  Serial.println("***************START*****************");

for(int i=0;i<6;i++){

  Serial.print("----------");Serial.print("This is block number: ");Serial.print(sequence[i]);Serial.println("----------");

intake(sequence[i]);

place();

  }

  Serial.println("*****************END***************");

delay(10000000);

}

```
