## Classes

<dl>
<dt><a href="#Expand">Expand</a></dt>
<dd><p>Defines children to expand.</p></dd>
<dt><a href="#Expansion">Expansion</a></dt>
<dd><p>Defines a child to expand.</p></dd>
<dt><a href="#Eq">Eq</a></dt>
<dd><p>Specifies a filter condition where two values are equivalent.</p></dd>
<dt><a href="#Ge">Ge</a></dt>
<dd><p>Specifies a filter condition where the left operand if greater than or equal
to the right.</p></dd>
<dt><a href="#Gt">Gt</a></dt>
<dd><p>Specifies a filter condition where the left operand if greater than the right.</p></dd>
<dt><a href="#Le">Le</a></dt>
<dd><p>Specifies a filter condition where the left operand if less than or equal to
the right.</p></dd>
<dt><a href="#Lt">Lt</a></dt>
<dd><p>Specifies a filter condition where the left operand if less than the right.</p></dd>
<dt><a href="#Ne">Ne</a></dt>
<dd><p>Specifies a filter condition where two values are not equivalent.</p></dd>
<dt><a href="#RelationalFilter">RelationalFilter</a></dt>
<dd><p>Filters results with a relational condition between two values.</p></dd>
<dt><a href="#Order">Order</a></dt>
<dd><p>Defines a sort order for a specific piece of criteria.</p></dd>
<dt><a href="#OrderBy">OrderBy</a></dt>
<dd><p>Defines criteria to order by.</p></dd>
<dt><a href="#Select">Select</a></dt>
<dd><p>Specifies the fields to select.</p></dd>
<dt><a href="#QueryOptions">QueryOptions</a></dt>
<dd><p>Defines the options of a query.</p></dd>
<dt><a href="#Query">Query</a></dt>
<dd><p>Defines an OData query.</p></dd>
<dt><a href="#StringUtils">StringUtils</a></dt>
<dd><p>Provides additional functionality for strings.</p></dd>
</dl>

<a name="Expand"></a>

## Expand
<p>Defines children to expand.</p>

**Kind**: global class  

* [Expand](#Expand)
    * [new Expand(expansions)](#new_Expand_new)
    * [.toString()](#Expand+toString) ⇒ <code>string</code>

<a name="new_Expand_new"></a>

### new Expand(expansions)
<p>Creates an Expand.</p>


| Param | Description |
| --- | --- |
| expansions | <p>The children expansion definitions.</p> |

<a name="Expand+toString"></a>

### expand.toString() ⇒ <code>string</code>
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>Expand</code>](#Expand)  
**Returns**: <code>string</code> - <p>The resulting parameter string.</p>  
<a name="Expansion"></a>

## Expansion
<p>Defines a child to expand.</p>

**Kind**: global class  

* [Expansion](#Expansion)
    * [new Expansion(field, query)](#new_Expansion_new)
    * [.toString()](#Expansion+toString) ⇒ <code>string</code>

<a name="new_Expansion_new"></a>

### new Expansion(field, query)
<p>Creates an Expansion.</p>


| Param | Description |
| --- | --- |
| field | <p>The child field to expand.</p> |
| query | <p>The query to apply to the child.</p> |

<a name="Expansion+toString"></a>

### expansion.toString() ⇒ <code>string</code>
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>Expansion</code>](#Expansion)  
**Returns**: <code>string</code> - <p>The resulting parameter string.</p>  
<a name="Eq"></a>

## Eq
<p>Specifies a filter condition where two values are equivalent.</p>

**Kind**: global class  
<a name="new_Eq_new"></a>

### new Eq(left, right)
<p>Creates an Eq.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="Ge"></a>

## Ge
<p>Specifies a filter condition where the left operand if greater than or equal
to the right.</p>

**Kind**: global class  
<a name="new_Ge_new"></a>

### new Ge(left, right)
<p>Creates an Ge.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="Gt"></a>

## Gt
<p>Specifies a filter condition where the left operand if greater than the right.</p>

**Kind**: global class  
<a name="new_Gt_new"></a>

### new Gt(left, right)
<p>Creates an Gt.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="Le"></a>

## Le
<p>Specifies a filter condition where the left operand if less than or equal to
the right.</p>

**Kind**: global class  
<a name="new_Le_new"></a>

### new Le(left, right)
<p>Creates an Le.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="Lt"></a>

## Lt
<p>Specifies a filter condition where the left operand if less than the right.</p>

**Kind**: global class  
<a name="new_Lt_new"></a>

### new Lt(left, right)
<p>Creates an Lt.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="Ne"></a>

## Ne
<p>Specifies a filter condition where two values are not equivalent.</p>

**Kind**: global class  
<a name="new_Ne_new"></a>

### new Ne(left, right)
<p>Creates an Ne.</p>


| Param | Description |
| --- | --- |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="RelationalFilter"></a>

## RelationalFilter
<p>Filters results with a relational condition between two values.</p>

**Kind**: global class  

* [RelationalFilter](#RelationalFilter)
    * [new RelationalFilter(operator, left, right)](#new_RelationalFilter_new)
    * [.toString(prefix)](#RelationalFilter+toString)

<a name="new_RelationalFilter_new"></a>

### new RelationalFilter(operator, left, right)
<p>Creates a RelationalFilter.</p>


| Param | Description |
| --- | --- |
| operator | <p>The operator to compare the values with.</p> |
| left | <p>The left operand.</p> |
| right | <p>The right operand.</p> |

<a name="RelationalFilter+toString"></a>

### relationalFilter.toString(prefix)
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>RelationalFilter</code>](#RelationalFilter)  

| Param | Description |
| --- | --- |
| prefix | <p>The prefix to use in the parameter string.</p> |

<a name="Order"></a>

## Order
<p>Defines a sort order for a specific piece of criteria.</p>

**Kind**: global class  

* [Order](#Order)
    * [new Order(criteria, ascending)](#new_Order_new)
    * [.toString()](#Order+toString) ⇒ <code>string</code>

<a name="new_Order_new"></a>

### new Order(criteria, ascending)
<p>Creates an Order.</p>


| Param | Default | Description |
| --- | --- | --- |
| criteria |  | <p>The criteria to order by.</p> |
| ascending | <code>true</code> | <p>The direction to sort.</p> |

<a name="Order+toString"></a>

### order.toString() ⇒ <code>string</code>
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>Order</code>](#Order)  
**Returns**: <code>string</code> - <p>The resulting parameter string.</p>  
<a name="OrderBy"></a>

## OrderBy
<p>Defines criteria to order by.</p>

**Kind**: global class  

* [OrderBy](#OrderBy)
    * [new OrderBy(orders)](#new_OrderBy_new)
    * [.toString()](#OrderBy+toString) ⇒ <code>string</code>

<a name="new_OrderBy_new"></a>

### new OrderBy(orders)
<p>Creates an OrderBy.</p>


| Param | Description |
| --- | --- |
| orders | <p>The criteria to order by.</p> |

<a name="OrderBy+toString"></a>

### orderBy.toString() ⇒ <code>string</code>
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>OrderBy</code>](#OrderBy)  
**Returns**: <code>string</code> - <p>The resulting parameter string.</p>  
<a name="Select"></a>

## Select
<p>Specifies the fields to select.</p>

**Kind**: global class  

* [Select](#Select)
    * [new Select(fields)](#new_Select_new)
    * [.toString()](#Select+toString) ⇒ <code>string</code>

<a name="new_Select_new"></a>

### new Select(fields)
<p>Creates a Select.</p>


| Param | Description |
| --- | --- |
| fields | <p>The fields to select.</p> |

<a name="Select+toString"></a>

### select.toString() ⇒ <code>string</code>
<p>Outputs the OData parameter string.</p>

**Kind**: instance method of [<code>Select</code>](#Select)  
**Returns**: <code>string</code> - <p>The resulting parameter string.</p>  
<a name="QueryOptions"></a>

## QueryOptions
<p>Defines the options of a query.</p>

**Kind**: global class  
<a name="Query"></a>

## Query
<p>Defines an OData query.</p>

**Kind**: global class  

* [Query](#Query)
    * [new Query(options)](#new_Query_new)
    * [.toString(deliminator)](#Query+toString) ⇒ <code>string</code>

<a name="new_Query_new"></a>

### new Query(options)
<p>Creates a Query.</p>


| Param | Description |
| --- | --- |
| options | <p>The options to apply to the query.</p> |

<a name="Query+toString"></a>

### query.toString(deliminator) ⇒ <code>string</code>
<p>Converts the Query as an OData query string.</p>

**Kind**: instance method of [<code>Query</code>](#Query)  
**Returns**: <code>string</code> - <p>The resulting query string.</p>  

| Param | Default | Description |
| --- | --- | --- |
| deliminator | <code>&amp;</code> | <p>The deliminator to use between parameter strings.</p> |

<a name="StringUtils"></a>

## StringUtils
<p>Provides additional functionality for strings.</p>

**Kind**: global class  
<a name="StringUtils.isEmptyOrWhitespace"></a>

### StringUtils.isEmptyOrWhitespace(str)
<p>Checks if a string is empty or whitespace.</p>

**Kind**: static method of [<code>StringUtils</code>](#StringUtils)  

| Param | Description |
| --- | --- |
| str | <p>The string to check.</p> |

