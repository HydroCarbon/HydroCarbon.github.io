(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{616:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"java-中常用的修饰符（一）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-中常用的修饰符（一）"}},[t._v("#")]),t._v(" Java 中常用的修饰符（一）")]),t._v(" "),s("p",[t._v("Java 提供了多种修饰符，修饰符可以用来修饰变量、方法和类，从而达到不同的权限控制效果或者其他的作用。")]),t._v(" "),s("p",[t._v("因此可以把这些修饰符划分为两类：")]),t._v(" "),s("ol",[s("li",[t._v("访问权限修饰符")]),t._v(" "),s("li",[t._v("非访问权限修饰符")])]),t._v(" "),s("p",[t._v("而访问权限修饰符又分为修饰类的和修饰成员的。")]),t._v(" "),s("h2",{attrs:{id:"类成员访问权限修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类成员访问权限修饰符"}},[t._v("#")]),t._v(" 类成员访问权限修饰符")]),t._v(" "),s("p",[t._v("类的成员指的是类的方法，字段等")]),t._v(" "),s("p",[t._v("Java 一共提供了四种访问权限，但是只有三个访问权限修饰符，因为第四种就是不写任何的访问权限修饰符。这三个修饰符分别是：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("public")])]),t._v(" "),s("li",[s("code",[t._v("protected")])]),t._v(" "),s("li",[t._v("default（不加修饰符）")]),t._v(" "),s("li",[s("code",[t._v("private")])])]),t._v(" "),s("p",[t._v("这四种权限修饰符用于修饰类的成员，通过不同的修饰符来修饰类的成员以控制其他类对该类的成员的访问权限，具体这四种类的访问权限如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("修饰符")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类内部")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("同一个包的其他类")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("子类")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("其他包的类")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("public")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("protected")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("private")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("其中不加修饰符的权限控制方式（包访问权限），在同一个包下，可以将该类的成员看做是 "),s("code",[t._v("public")]),t._v(" 修饰的，对于其他的包下的类，则可以看做是 "),s("code",[t._v("private")]),t._v(" 修饰的。")]),t._v(" "),s("p",[t._v("另外，通过 Java 的反射机制可以访问本不可访问的类或类的成员。")])]),t._v(" "),s("h3",{attrs:{id:"public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public"}},[t._v("#")]),t._v(" public")]),t._v(" "),s("p",[s("code",[t._v("public")]),t._v(" 修饰符是四种权限控制中最为宽松的一种，使用 "),s("code",[t._v("public")]),t._v(" 修饰符修饰的对象，可以在任何地方进行访问。")]),t._v(" "),s("h3",{attrs:{id:"protected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protected"}},[t._v("#")]),t._v(" protected")]),t._v(" "),s("p",[t._v("该关键字修饰的类的成员，只对同一个包下的其他类和继承的子类中可见，该关键字实际上是处理的继承的概念，通过继承可以实现子类对父类的扩展，这样，我们可以将共性抽离出来放在一个父类中，在子类中补充每个类型的特性。通过继承可以描述一整个体系，将重复的代码有效的减少，而 "),s("code",[t._v("protected")]),t._v(" 有效的控制了类的成员的访问权限，使得类的成员在继承关系之外的类中无法得到访问。")]),t._v(" "),s("h3",{attrs:{id:"private"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private"}},[t._v("#")]),t._v(" private")]),t._v(" "),s("p",[t._v("使用该关键字修饰的类的成员意味着，任何其他的类都无法访问该类的成员，这样就可以将我们不想公开的实现代码使用 "),s("code",[t._v("private")]),t._v(" 修饰起来，这样可以达到代码保护的作用，而避免使用者错误的修改了代码而导致的程序运行问题。")]),t._v(" "),s("p",[t._v("比如以下代码：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrivateMethod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" dog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAnimalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doggy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" animalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnimalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" animalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAnimalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" animalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animalName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" animalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("这样就可以把 Animal 类中的 "),s("code",[t._v("animalName")]),t._v(" 成员保护起来，让其他的类无法直接修改，而是通过 "),s("code",[t._v("public")]),t._v(" 修饰的 "),s("code",[t._v("get()")]),t._v(" 和 "),s("code",[t._v("set()")]),t._v(" 方法来修改成员。")]),t._v(" "),s("h3",{attrs:{id:"default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[t._v("#")]),t._v(" default")]),t._v(" "),s("p",[t._v("默认的包访问权限强制性的让我们将相关的类型合理地聚合到一个包下，这对代码的合理性和整体逻辑性会有明显的提升，当然其他的几种访问权限也达到了这样的作用。不使用修饰符修饰的类的成员，对于同一个包下的类可以看成是使用 "),s("code",[t._v("public")]),t._v(" 修饰的，而对于其他包下的类，则可以看成是使用 "),s("code",[t._v("private")]),t._v(" 修饰的。")]),t._v(" "),s("h2",{attrs:{id:"类访问权限修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类访问权限修饰符"}},[t._v("#")]),t._v(" 类访问权限修饰符")]),t._v(" "),s("p",[t._v("对类的访问权限修饰符只有两种，一是 "),s("code",[t._v("public")]),t._v(" 修饰的，表示任意的类都可以访问，另一个是没有修饰符的（default），表示只在当前包下可以访问。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("使用访问权限修饰符，可以很好地将实现和接口分离，使用者只需要使用 "),s("code",[t._v("public")]),t._v(" 接口，就可以完成事务，而无需去了解开发人员书写的代码，确定了开发人员和使用人员的界限，然后还有效的保护了代码。")])])}),[],!1,null,null,null);a.default=n.exports}}]);