# oo-odata-query

This library provides an object oriented method of building OData queries.

## [Documentation](/docs/)

## Examples

### Select

The *Select* class is used to select specific fields. For example,

~~~
new Query({
  select: new Select(['id', 'name', 'age'])
}).toString();
~~~

returns

~~~
'$select=id,name,age'
~~~

### Expand

The *Expand* class expands children. For example,

~~~
new Query({
  expand: new Expand()
}).toString();
~~~

returns

~~~
'$expand=address'
~~~

and

~~~
new Query({
  expand: new Expand([
    new Expansion(
      'contact',
      new Query({
        select: new Select(['id', 'name'])
      })
    )
  ])
).toString();
~~~

returns

~~~
'$expand=contact($select=id,name)'
~~~
