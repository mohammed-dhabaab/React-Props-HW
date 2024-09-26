import "./adults-cards.css"
import Card from "../Card/Card"

function AdultsCards() {
    return (
        <section className="cards-container">
            <div className="section-container">
                <Card programType="برنامج" programTitle="تطبيق قاعدة بيانات SQL باستخدام لغة Python" programLocation="أسبوعان" programTime="يومان" programDate="2024/10/06" />
                <Card programType="معسكر" programTitle="بناء وتطوير نماذج الذكاء الاصطناعي" programLocation="الرياض" programTime="4 أسابيع" programDate="2024/12/17" />
                <Card programType="لقاء" programTitle="استكشاف حدود الذكاء الاصطناعي والتعلم الآلي" programLocation="الرياض" programTime="يوم" programDate="2024/10/1" />
                <Card programType="برنامج" programTitle="طويق فلاق بارد" programLocation="الرياض" programTime="يومان" programDate="2024/9/3" />
                <Card programType="معسكر" programTitle="تطوير مواقع الويب باستخدام لغة JavaScript" programLocation="الرياض" programTime="10 أسابيع" programDate="2024/8/25" />
                <Card programType="لقاء" programTitle="تحسين تجربة المستخدم في التصميم باستخدام Figma" programLocation="الرياض" programTime="يوم" programDate="2024/9/3" />
            </div>
        </section>
    )
}

export default AdultsCards