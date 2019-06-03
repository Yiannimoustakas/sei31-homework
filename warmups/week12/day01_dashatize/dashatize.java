private static void dashatize(Integer n) {
    String str = "";
    String[] arrstr = Integer.toString(n).split("");

    for (int i = 0; i < arrstr.length; i++) {
        String s = arrstr[i];
        if (Character.isDigit(s.charAt(0))) {

            String last = "";
            if (i < arrstr.length - 1) {
                Integer next = Integer.parseInt(arrstr[i + 1]);
                Integer curr = Integer.parseInt(s);
                if (curr % 2 != 0 && next % 2 == 0 && i < arrstr.length - 1) {
                    last = "-";
                }
            }
            str += (Integer.parseInt(s) % 2 == 0) ? s : (str.length() == 0 ? "" : "-") + s + last;
        }

    }

    System.out.println(str);
}
