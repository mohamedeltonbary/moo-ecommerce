"use client";

import { usePathname } from "next/navigation";

export const useActivePath = () => {
    // هو جاهز من نيكست وظيفته يمسك ال يرل الحالى
  const pathname = usePathname();

  /**
   * وظيفة للتأكد من المسار الحالي
   * @param path المسار المراد فحصه (مثلاً /cart)
   * @returns true لو المسار مطابق
   */
  const checkActive = (path: string): boolean => {
    // لو إنت في الصفحة الرئيسية

    //  بص ي باشا انا هنا عملت كدا لان الصفحه الرئيسيه بتبدا ب سلاش برضو ف كان ممكن يودينى عليها مش على الكارد دى
    if (path === "/" && pathname !== "/") return false;
    
    // بيشوف هل المسار بيبدأ بالكلمة دي (عشان لو عندك صفحات فرعية)
    return pathname.startsWith(path);
  };

  return { checkActive };
};