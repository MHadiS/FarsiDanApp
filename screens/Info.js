import { View, Text, ScrollView } from "react-native";
import { styles } from "../Style";


export default function InfoScreen(props) { 
    return (
        <ScrollView style={styles.questionsScreenContainer}>
            <Text style={[styles.alert, styles.title]}>!!! توجه !!!</Text>
            <Text style={styles.alert}>این برنامه در حال توسعه است و ممکن است که مشکلاتی داشته باشد</Text>
            <Text style={styles.alert}>اگر به مشکلی بر خوردید به ایمیل در بخش ارتباط با ما گزارش خود را ارسال کنید</Text>
            <View style={styles.section}>
                <Text style={[styles.text, styles.title]}>کاربرد</Text>
                <Text style={styles.text}>برنامه فارسیدان محلی برای حل سوالات فارسی کلاس نهم هست که با آن میتوانیم در درس فارسی پیشرفت کنیم.</Text>
            </View>
            <View style={styles.section}>
                <Text style={[styles.text, styles.title]}>اسفاده از برنامه</Text>
                <Text style={styles.text}>در صفحه اول لیستی از سوالات با یک سری اطلاعات درباره ی آنها را می بینید وبرای جواب دادن به سوال روی آن کلیک کنید و وارد بخش حل سوال می شوید کهدر آنجا می توانید به سوال های بعدی هم بروید. اگر یک سری سوالات خاص درنظر دارید ( برای مثال سوالات درس 1 ) میتوانید با کلیک کردن دکمه بالا سمت چپ به بخش فیلتر بروید و نوع سوال خود را انتخاب کنید.</Text>
            </View>
            <View style={styles.section}>
                <Text style={[styles.text, styles.title]}>ارتباط با ما</Text>
                <Text style={styles.text}>ایمیل: mhshakibazad@gmail.com</Text>
            </View>
            <Text style={{textAlign: 'center', color: "#fff", opacity: 0.5, margin: 15}}>این برنامه توسط محمد هادی شکیب آزاد و احمد یوسفی دانش آموزان کلاس نهم مدرسه شهید مصطفی خمینی ساخته شده است</Text>
        </ScrollView>
    );
}