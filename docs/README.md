## Classes

<dl>
<dt><a href="#Expand">Expand</a></dt>
<dd><p>Defines children to expand.</p></dd>
<dt><a href="#Expansion">Expansion</a></dt>
<dd><p>Defines a child to expand.</p></dd>
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

