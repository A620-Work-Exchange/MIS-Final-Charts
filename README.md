- 柱状  (折线)
- 散点
- 旭日图
- 折线
- 雷达
- 热力图
- 地图
- 平行坐标// 慎
- 波士顿矩阵
- 3D 点，柱



## 学生指标设计

维度: 时间 (学期、年)，课程，成绩，作业，教师

- 课程情况统计 (学期、年):  -- 帮助学生了解自己的课程选修和成绩情况
- 选课数、退课数 
- 成绩 
- 作业完成情况:  单个课程作业完成情况: 完成作业数 / 作业总数
  - 正确率
  - 完成度



## 教师指标设计

维度: 时间 (学期、年)，课程，作业，成绩，学生院系

#### 开课分析 (学期，学年) -- 帮助老师了解课程受欢迎程度，调整限定选课人数和授课策略

- 开设课程数 

- 学生退课人数/ 初始选课总人数



#### 作业分析 (按课程) -- 收到课程反馈，作出调整

- 作业完成率

- 异常作业，异常作业定义为以下任意一种情况

- 作业完成率 hwFinishedRate = 已提交非空白及非抄袭作业 / 选课人数  <  70%

- 作业平均分 hwAvgScore < 总分 * 60%





#### 成绩分析 (课程) -- 老师了解不同课程学生接受程度和不同院系学生的区别

- 课程平均分

- 课程及格率
- 课程高分率  ( >= 90)
-  学生院系, 考虑到学生混杂的情况，以学生院系占比加权 若有一方人数占比低于5%，取比例为0，其余一致



##  主管指标设计

维度: 时间，教师，院系，成绩



#### 教师工作产出分析 (单个课程) -- 帮助主管了解每个老师的工作产出，作出人力资源调整

- 学生退课率

- 学生及格率

- 低产出课程  = 学生选课人数 / 限定人数 < 50% || 学生及格率 < 80%

- 教师实际产出 = 非低产出课程数 - 低产出课程数  



####  院系统计(按学期/ 学年) -- 帮助主管了解各个院系的情况，调整资源分配

- 教师开课数

- 学生选课数



#### 平台使用情况 (按学期/ 学年) -- 帮助主管了解平台的实际使用，制定维护和运营策略

- 活跃用户为一个月内使用平台的用户，                                                                                                      活跃用户率activeUserRate = 活跃用户数 / 平台总用户数

- 教师开课总数
- 在线人数 (按天/ 月)