# Hands-on assignment 3 - Self assessment#

## Checklist ##

**Every RDF file:**
• OK: Uses the .ttl extension
• OK: Is serialized in the Turtle format
• OK: Follows the resource naming strategy
• OK: Uses class and property URIs that are the same as those used in the
ontology

**Every URI in the RDF files:**
• OK: Is "readable" and has some meaning (e.g., it is not an auto-increased
integer)
• OK: Is not encoded as a string
• OK: Does not contain a double slash (i.e., “//”)

**Every individual in the RDF files:**
• OK: Has a label with the name of the individual
• OK:Has a type

**Every value in the RDF files:**
• OK: Is not empty (i.e., “”)
• OK: Is trimmed
• OK: Is properly encoded (e.g., dates, booleans)
• OK:Includes its datatype
• OK:Uses the correct datatype (e.g., values of 0-1 may be booleans and not
integers, not every string made of numbers is a number)
