---
title: Impl Relations
description: Current Spec relation declarations, ownership rules, and implementation boundaries.
sidebar:
  order: 5
---

The current Spore Spec contract uses `impl` for independent relations between existing types. This page describes the language target reviewed on 2026-11-15. The bootstrap compiler's existing `impl Trait for Type` belongs to an earlier syntax and does not implement this target.

## Check an existing implementation

```text
type Display { method render() -> Str; }
type Ready { method render() -> Str { "ready" } }
impl Ready <: Display;
```

Without a body, impl checks the existing members, defaults and evidence. It does not assume the relation as an axiom.

## Complete missing members

```text
type Label { field text: Str; }
impl Label <: Display {
    method render() -> Str { self.text }
};
```

A completion body supplies missing implementations or proofs. It cannot redefine an existing member incompatibly or add required storage to existing values. A final semicolon is required in both forms.

Generic and universe parameters follow the keyword: `impl@<u>[T: Type@<u>] F[T] <: G[T];`. Reverse spelling `impl B :> A;` declares the same direction as `impl A <: B;`.

## Ownership and coherence

Every impl requires the current package to own at least one endpoint's outer nominal type constructor. Aliases, imports, re-exports and local arguments inside foreign generic types do not transfer ownership. For example, `impl ForeignContainer[Local] <: ForeignAbs;` is rejected when both outer constructors are foreign.

Passing ownership checks still requires complete members, valid branch coverage and coherent overlapping or indirect paths. Imports cannot choose a conflicting implementation by order.

## Relations in other positions

Parameter bounds `[T <: Base]`, propositions `(A <: B)` and case indices `case Nil <: Vec[A, zero]` keep `<:` / `:>` without impl. Structural membership `F: C { ... };` is unchanged. The current Spec grammar rejects old independent declarations such as `A <: B;`.

The normative checkout sources are `spore-spec/spec/syntax.md` and `spore-spec/spec/semantics.md`. Grammar acceptance and syntax highlighting do not establish type, ownership or proof checking. See [the Spore repository](https://github.com/spore-lang/spore) for the implementation source of truth.
