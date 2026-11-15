---
title: impl 关联声明
description: 当前 Spec 的独立关联、孤儿规则、补全体与实现边界。
sidebar:
  order: 5
---

当前 Spore Spec 使用 `impl` 声明既有类型之间的独立关联。本页对应 2026-11-15 核对的语言目标；bootstrap 编译器现有的 `impl Trait for Type` 属于较早语法，不表示它已实现本页规则。

## 检查已有实现

```text
type Display { method render() -> Str; }
type Ready { method render() -> Str { "ready" } }
impl Ready <: Display;
```

没有正文时，impl 检查已有成员、默认实现及证据是否完整，不把关系当作公理。

## 补齐缺失成员

```text
type Label { field text: Str; }
impl Label <: Display {
    method render() -> Str { self.text }
};
```

补全体提供缺失实现或证明，不能冲突地重定义已有成员，也不能给既有实例补加必填存储字段。两种形式都要求末尾分号。

层级和泛型参数紧随关键字：`impl@<u>[T: Type@<u>] F[T] <: G[T];`。反向写法 `impl B :> A;` 与 `impl A <: B;` 声明同一方向的关系。

## 孤儿规则与一致性

每条 impl 都要求当前包拥有至少一端的最外层名义类型构造器。透明别名、导入、重新导出和外部泛型中的本地类型实参不转移所有权。例如，两端最外层构造器都来自外包时，`impl ForeignContainer[Local] <: ForeignAbs;` 仍被拒绝。

通过所有权检查后，仍须核验成员完整性、分支覆盖，以及重叠或多条路径的一致性；不能按导入顺序选择冲突实现。

## 其他位置的关系

参数界限 `[T <: Base]`、关系命题 `(A <: B)` 和 case 索引 `case Nil <: Vec[A, zero]` 保留 `<:`／`:>`，不加 impl。结构归属补全 `F: C { ... };` 也保持原写法。当前 Spec 文法拒绝旧的独立声明 `A <: B;`。

规范正文位于 checkout 的 `spore-spec/spec/syntax.md` 与 `spore-spec/spec/semantics.md`。语法识别和高亮不等于类型、所有权或证明检查；实现状态以[Spore 仓库](https://github.com/spore-lang/spore)中的代码为准。
