# 企业市场竞争力自测系统

> 一个基于 Web 的企业市场竞争力测评系统，支持 To C 和 To B 两种业务模式，数据存储在 Supabase 云数据库。

## 功能说明

这是一个完整的企业市场竞争力自测网页系统，包含以下功能：

1. **业务类型选择**：支持 To C 和 To B 两种业务模式
2. **21道题目测评**：7个维度（需求、价值、渠道、壁垒、管理、能力、激励），每个维度3道题
3. **1-10分滑动条评分**：每题使用滑动条进行1-10分评价
4. **智能计算**：
   - 计算业绩均分(P_avg)、组织均分(O_avg)、壁垒均分(B_avg)、数字化均分(D_avg)
   - 计算CBI竞争力指数：`CBI = ((P_avg + O_avg) / 2) * (B_avg / 10) * (1 + D_avg / 50)`
5. **可视化展示**：
   - 四宫格定位图（X轴：组织分，Y轴：业绩分）
   - 七维度雷达图
   - CBI竞争力指数仪表盘
6. **企业类型诊断**：根据P_avg和O_avg自动判断企业类型（领跑型、虚火型、内耗型、生存型）
7. **留资功能**：收集姓名、公司、电话信息
8. **PDF报告生成**：生成详细的PDF解读报告

## 快速开始

### 在线使用

系统已部署在 GitHub Pages，可以直接访问：
- **测评页面**：访问 `index.html`
- **管理后台**：访问 `admin.html`（默认密码：`admin123`）

### 本地开发

1. 克隆仓库到本地
2. 配置 Supabase（见 `SUPABASE_SETUP_GUIDE.md`）
3. 创建 `config.js` 文件（见 `配置说明.md`）
4. 在浏览器中打开 `index.html`

### 部署到 GitHub Pages

详细步骤请参考 `DEPLOYMENT_GUIDE.md`

### 3. 使用流程

1. 选择业务类型（To C 或 To B）
2. 依次回答21道题目，每题使用滑动条评分（1-10分）
3. 查看测评结果：
   - 企业类型诊断
   - 四宫格定位图
   - CBI竞争力指数
   - 七维度雷达图
   - 维度得分详情
4. 点击"获取详细PDF报告"
5. 填写个人信息（姓名、公司、电话）
6. 生成并下载PDF报告

## 文件说明

### 核心文件
- `index.html` - 测评页面，用户填写测评
- `admin.html` - 管理后台，查看和管理测评数据
- `config.js` - Supabase 配置文件（需要自己创建，见 `配置说明.md`）
- `config.example.js` - 配置文件模板

### 数据库相关
- `supabase_setup.sql` - 数据库表创建脚本
- `supabase_rls_policy.sql` - 数据库安全策略脚本
- `SUPABASE_SETUP_GUIDE.md` - Supabase 设置指南

### 部署相关
- `DEPLOYMENT_GUIDE.md` - GitHub Pages 部署指南
- `配置说明.md` - 配置文件设置说明

## 技术栈

- **前端**：HTML5 + CSS3 + JavaScript (原生)
- **图表**：Chart.js - 用于绘制雷达图
- **PDF**：jsPDF - 用于生成PDF报告
- **数据库**：Supabase (PostgreSQL)
- **部署**：GitHub Pages

## 注意事项

1. CSV文件需要使用GBK或UTF-8编码
2. 如果无法加载 `questions_data.json`，系统会使用默认占位题目
3. PDF报告生成需要浏览器支持jsPDF库
4. 建议使用现代浏览器（Chrome、Firefox、Edge等）

## 题目数据结构

CSV文件格式要求：
- 第一列：维度名称（如"需求结构"、"价值结构"等）
- 第二列：题目描述
- 空行用于分隔不同维度

JSON文件格式：
```json
{
  "toc": [
    {
      "dimension": "需求",
      "dimensionIndex": 0,
      "questionIndex": 0,
      "question": "题目文本"
    }
  ],
  "tob": [...]
}
```

## 计算逻辑说明

- **业绩均分(P_avg)**：需求、价值、渠道三个维度的平均分
- **组织均分(O_avg)**：管理、能力、激励三个维度的平均分
- **壁垒均分(B_avg)**：壁垒维度的得分
- **数字化均分(D_avg)**：价值维度的得分（可根据实际需求调整）

**企业类型判断**（以6分为界）：
- P_avg ≥ 6 且 O_avg ≥ 6 → 领跑型
- P_avg ≥ 6 且 O_avg < 6 → 虚火型
- P_avg < 6 且 O_avg ≥ 6 → 内耗型
- P_avg < 6 且 O_avg < 6 → 生存型
